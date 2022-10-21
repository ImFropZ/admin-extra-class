import { DataTable, SectionHeader, Modal } from "../../components";
import Dummy from "../../DummyData";
import { useAction, useStar, useSearch } from "../../customHook";
import classes from "./course.module.css";
import { useState, useReducer } from "react";
import reducer, { ACTION } from "../../helper/Reducer";

const STATE = {
  name: "",
  teacher: "",
  price: "",
  description: "",
  editId: "",
  searchValue: "",
  isSearch: false,
};

function Course() {
  const [state, dispatch] = useReducer(reducer, STATE);
  const [courseData, setCourseData] = useState(Dummy.course);

  const head: Array<string> = [
    "ID",
    "Name",
    "Teacher",
    "Price($)",
    "Description",
    "Rate",
    "Action",
  ];
  const data: Array<Array<any>> = [];

  const star = useStar({
    totalStar: 5,
    containerClassName: classes.starContainer,
  });
  const action = useAction(classes.actionContainer);
  const search = useSearch({
    list: Dummy.teacher,
    onChange: (e) => {
      dispatch({ type: ACTION.NEW_SEARCH_VALUE, payload: e.target.value });
    },
    onSelected: (data) => {
      dispatch({ type: ACTION.NEW_TEACHER, payload: data.name });
      dispatch({ type: ACTION.NEW_SEARCH_VALUE });
      dispatch({ type: ACTION.TG_SEARCH });
    },
  });

  const editAction = (key: string) => {
    const data = courseData.find((c) => c.id === key);
    dispatch({ type: ACTION.NEW_NAME, payload: data?.name });
    dispatch({ type: ACTION.NEW_TEACHER, payload: data?.teacher });
    dispatch({ type: ACTION.NEW_PRICE, payload: data?.price });
    dispatch({ type: ACTION.NEW_DESCRIPTION, payload: data?.description });
    dispatch({ type: ACTION.NEW_EDIT_ID, payload: key });
  };

  const deleteAction = (key: string) => {
    setCourseData((prev) => {
      return prev.filter((el) => el.id !== key);
    });
  };

  const onDoneHandler = () => {
    setCourseData((prev) => {
      return prev.map((course) => {
        if (course.id === state.editId) {
          course.name = state.name || "";
          course.teacher = state.teacher || "";
          course.price = parseInt(state.price || "0");
          course.description = state.description || "";
        }
        return course;
      });
    });
    dispatch({ type: ACTION.NEW_EDIT_ID });
  };

  courseData.forEach((e) => {
    data.push([
      e.id,
      e.name,
      e.teacher,
      e.price.toString(),
      e.description,
      star(parseInt(e.rate)),
      action({
        editAction: () => editAction(e.id),
        deleteAction: () => deleteAction(e.id),
      }),
    ]);
  });

  return (
    <>
      <SectionHeader
        title="Course Details"
        btnName="+ Create New Course"
        onCreate={() => {
          console.log("Course");
        }}
      />
      <DataTable
        head={head}
        data={data}
        style={{
          head: [
            { id: "id", style: { width: "5%" } },
            { id: "name", style: { textAlign: "left", width: "15%" } },
            { id: "teacher", style: { textAlign: "left", width: "15%" } },
            {
              id: "price($)",
              style: { textAlign: "left", width: "5%", paddingLeft: "10px" },
            },
            {
              id: "description",
              style: { textAlign: "left", paddingLeft: "25px" },
            },
            { id: "rate", style: { width: "15%" } },
            { id: "action", style: { width: "8%" } },
          ],
          body: [
            { id: "name", style: { textAlign: "left" } },
            { id: "teacher", style: { textAlign: "left" } },
            {
              id: "price($)",
              style: { textAlign: "left", paddingLeft: "10px" },
            },
            {
              id: "description",
              style: { textAlign: "left", paddingLeft: "25px" },
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
                  dispatch({ type: ACTION.NEW_NAME, payload: e.target.value });
                }}
              />
            </div>
            <div className={classes.inputContainer}>
              <p>Teacher : </p>
              <div
                className={classes.input}
                onClick={() => {
                  dispatch({ type: ACTION.TG_SEARCH });
                }}
              >
                {state.teacher}
              </div>
            </div>
            <div className={classes.inputContainer}>
              <p>Price($) : </p>
              <input
                type="text"
                name="price"
                value={state.price}
                onChange={(e) => {
                  dispatch({ type: ACTION.NEW_PRICE, payload: e.target.value });
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
                dispatch({
                  type: ACTION.NEW_EDIT_ID,
                });
              }}
            >
              Cancel
            </button>
            <button onClick={onDoneHandler}>Done</button>
          </div>
        </Modal>
      ) : null}
      {state.isSearch ? search(state.searchValue) : null}
    </>
  );
}

export default Course;
