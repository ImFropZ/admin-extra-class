import { useState, useReducer } from "react";
import { DataTable, Modal, SectionHeader } from "../../components";
import { useAction } from "../../customHook";
import Dummy from "../../DummyData";
import classes from "./student.module.css";
import reducer, { ACTION } from "../../helper/Reducer";

const STATE = {
  name: "",
  gender: "",
  email: "",
  editId: "",
};

function Student() {
  const [state, dispatch] = useReducer(reducer, STATE);
  const [DummyStudent, setDummyStudent] = useState(Dummy.student);

  const head: Array<string> = ["ID", "Name", "Gender", "Email", "Action"];
  const data: Array<Array<any>> = [];
  const action = useAction(classes.actionContainer);

  const editAction = (id: string) => {
    const data = DummyStudent.find((el) => el.id === id);
    dispatch({ type: ACTION.NEW_NAME, payload: data?.name || "" });
    dispatch({ type: ACTION.NEW_GENDER, payload: data?.gender || "U" });
    dispatch({ type: ACTION.NEW_EMAIL, payload: data?.email || "" });
    dispatch({ type: ACTION.NEW_EDIT_ID, payload: id });
  };

  const deleteAction = (id: string) => {
    setDummyStudent((prev) => prev.filter((student) => student.id !== id));
  };

  const onDoneHandler = () => {
    setDummyStudent((prev) => {
      return prev.map((student) => {
        if (student.id === state.editId) {
          student.name = state.name || "";
          student.gender = state.gender || "U";
          student.email = state.email || "";
        }
        return student;
      });
    });
    console.log(DummyStudent, Dummy.student);
    dispatch({ type: ACTION.NEW_EDIT_ID });
  };

  DummyStudent.forEach((e) => {
    data.push([
      e.id,
      e.name,
      e.gender,
      e.email,
      action({
        editAction: () => editAction(e.id),
        deleteAction: () => deleteAction(e.id),
      }),
    ]);
  });

  return (
    <>
      <SectionHeader
        title="Student Details"
        btnName="+ Create New Student"
        onCreate={() => {
          console.log("Student");
        }}
      />
      <DataTable
        head={head}
        data={data}
        style={{
          head: [
            { id: "id", style: { width: "5%" } },
            {
              id: "name",
              style: { textAlign: "left", width: "37%", paddingLeft: "25px" },
            },
            { id: "gender", style: { width: "5%" } },
            {
              id: "email",
              style: { textAlign: "left", width: "45%", paddingLeft: "25px" },
            },
            { id: "action", style: { width: "8%" } },
          ],
          body: [
            { id: "name", style: { textAlign: "left", paddingLeft: "25px" } },
            { id: "email", style: { textAlign: "left", paddingLeft: "25px" } },
          ],
        }}
      />
      {state.editId ? (
        <Modal className={classes.modal}>
          <h1>Edit on ID : {state.editId}</h1>
          <div className={classes.wrapper}>
            <div className={classes.inputContainer}>
              <p>Name : </p>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={(e) => {
                  dispatch({
                    type: ACTION.NEW_NAME,
                    payload: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className={classes.inputContainer}>
              <p>Gender : </p>
              <input
                type="radio"
                name="gender"
                id="M"
                value="M"
                defaultChecked={state.gender === "M" ? true : false}
                onClick={(e) => {
                  dispatch({
                    type: ACTION.NEW_GENDER,
                    payload: e.currentTarget.value,
                  });
                }}
              />
              <label htmlFor="M">Male</label>
              <input
                type="radio"
                name="gender"
                id="F"
                value="F"
                defaultChecked={state.gender === "F" ? true : false}
                onClick={(e) => {
                  dispatch({
                    type: ACTION.NEW_GENDER,
                    payload: e.currentTarget.value,
                  });
                }}
              />
              <label htmlFor="F">Female</label>
              <input
                type="radio"
                name="gender"
                id="U"
                value="U"
                defaultChecked={state.gender === "U" ? true : false}
                onClick={(e) => {
                  dispatch({
                    type: ACTION.NEW_GENDER,
                    payload: e.currentTarget.value,
                  });
                }}
              />
              <label htmlFor="U">Unknown</label>
            </div>
            <div className={classes.inputContainer}>
              <p>Email : </p>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: ACTION.NEW_EMAIL,
                    payload: e.currentTarget.value,
                  });
                }}
              />
            </div>
          </div>
          <div className={classes.action}>
            <button
              onClick={() => {
                dispatch({ type: ACTION.NEW_EDIT_ID, payload: "" });
              }}
            >
              Cancel
            </button>
            <button onClick={onDoneHandler}>Done</button>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default Student;
