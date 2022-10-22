import { DataTable, SectionHeader, Modal } from "../../components";
import Dummy from "../../DummyData";
import { useAction } from "../../hook";
import { useMemo, useReducer, useState } from "react";
import reducer, { ACTION } from "../../helper/Reducer";
import classes from "./teacher.module.css";

const STATE = {
  name: "",
  gender: "",
  telephone: "",
  email: "",
  description: "",
  editId: "",
};

function Teacher() {
  const [state, dispatch] = useReducer(reducer, STATE);
  const [DummyTeacher, setDummyTeacher] = useState(Dummy.teacher);

  const action = useAction(classes.actionContainer);
  const editAction = (id: string) => {
    const data = DummyTeacher.find((teacher) => teacher.id === id);
    dispatch({ type: ACTION.NEW_NAME, payload: data?.name });
    dispatch({ type: ACTION.NEW_GENDER, payload: data?.gender });
    dispatch({ type: ACTION.NEW_TELEPHONE, payload: data?.telephone });
    dispatch({ type: ACTION.NEW_EMAIL, payload: data?.email });
    dispatch({ type: ACTION.NEW_DESCRIPTION, payload: data?.description });
    dispatch({ type: ACTION.NEW_EDIT_ID, payload: id });
  };
  const deleteAction = (id: string) => {
    setDummyTeacher((prev) => {
      return prev.filter((teacher) => teacher.id !== id);
    });
  };

  const onDoneHandler = () => {
    setDummyTeacher((prev) => {
      return prev.map((teacher) => {
        if (teacher.id === state.editId) {
          teacher.name = state.name;
          teacher.gender = state.gender;
          teacher.telephone = state.telephone;
          teacher.email = state.email;
          teacher.description = state.description;
        }
        return teacher;
      });
    });
    dispatch({ type: ACTION.NEW_EDIT_ID });
  };

  const head: Array<string> = useMemo(
    () => [
      "ID",
      "Name",
      "Gender",
      "Telephone",
      "Email",
      "Description",
      "Action",
    ],
    []
  );
  const data: Array<Array<any>> = useMemo(
    () =>
      DummyTeacher.map((teacher) => {
        return [
          teacher.id,
          teacher.name,
          teacher.gender,
          teacher.telephone,
          teacher.email,
          teacher.description,
          action({
            editAction: () => editAction(teacher.id),
            deleteAction: () => deleteAction(teacher.id),
          }),
        ];
      }),
    [DummyTeacher]
  );

  return (
    <>
      <SectionHeader
        title="Teacher Details"
        btnName="+ Create New Teacher"
        onCreate={() => {
          console.log("teacher");
        }}
      />
      <DataTable
        head={head}
        data={data}
        style={{
          head: [
            {
              id: "id",
              style: { width: "5%" },
            },
            {
              id: "name",
              style: { textAlign: "left", width: "15%" },
            },
            {
              id: "gender",
              style: { width: "5%" },
            },
            {
              id: "telephone",
              style: { width: "15%", textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "email",
              style: { width: "25%", textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "action",
              style: { width: "8%" },
            },
          ],
          body: [
            {
              id: "name",
              style: { textAlign: "left" },
            },
            {
              id: "telephone",
              style: { textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "email",
              style: { textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "description",
              style: { paddingLeft: "1.5em", textAlign: "left" },
            },
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
              <div className={classes.radioContainer}>
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
            </div>
            <div className={classes.inputContainer}>
              <p>Telephone : </p>
              <input
                type="text"
                name="telephone"
                value={state.telephone}
                onChange={(e) => {
                  dispatch({
                    type: ACTION.NEW_TELEPHONE,
                    payload: e.currentTarget.value,
                  });
                }}
              />
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
            <div className={classes.inputContainer}>
              <p>Description : </p>
              <textarea
                rows={7}
                cols={25}
                maxLength={125}
                name="description"
                value={state.description}
                onChange={(e) => {
                  dispatch({
                    type: ACTION.NEW_DESCRIPTION,
                    payload: e.target.value,
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

export default Teacher;
