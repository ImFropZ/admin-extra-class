import {
  StudentContainer,
  Class,
  Item,
  Modal,
  AddedStudent,
} from "../../components";
import classes from "./classroom.module.css";
import Dummy from "../../DummyData";
import { useState, useReducer } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import reducer, { ACTION } from "../../helper/Reducer";
import { useSearch } from "../../hook";

const STATE = {
  name: "",
  teacher: "",
  editId: "",
  searchValue: "",
  isSearch: "",
};

function Classroom() {
  const [state, dispatch] = useReducer(reducer, STATE);
  const [addedStudent, setAddedStudent] = useState<Array<Dummy.Student>>([]);
  const [DummyClassroom, setDummyClassroom] = useState(Dummy.classroom);
  const [DummyStudent, setDummyStudent] = useState(Dummy.student);

  const search = useSearch({
    list: Dummy.teacher,
    onChange: (e) => {
      dispatch({ type: ACTION.NEW_SEARCH_VALUE, payload: e.target.value });
    },
    onSelected: (teacher) => {
      dispatch({ type: ACTION.NEW_TEACHER, payload: teacher.id });
      dispatch({ type: ACTION.NEW_SEARCH_VALUE });
      dispatch({ type: ACTION.NEW_SEARCH });
    },
  });

  const studentSearch = useSearch({
    list: DummyStudent.filter((student) => student.class !== state.editId),
    onChange: (e) => {
      dispatch({ type: ACTION.NEW_SEARCH_VALUE, payload: e.target.value });
    },
    onSelected: (student) => {
      dispatch({ type: ACTION.NEW_SEARCH });
      dispatch({ type: ACTION.NEW_SEARCH_VALUE });
      if (addedStudent.some((aStudent) => aStudent.id === student.id)) return;
      addedStudent.push(student);
    },
  });

  const [activeStu, setActiveStu] = useState<Dummy.Student>();
  const sensors = useSensors(useSensor(PointerSensor));

  const onEditHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    const course = DummyClassroom.find((classroom) => classroom.id === id);

    dispatch({ type: ACTION.NEW_NAME, payload: course?.name });
    dispatch({ type: ACTION.NEW_TEACHER, payload: course?.teacher });
    dispatch({ type: ACTION.NEW_EDIT_ID, payload: id });
  };

  const onDoneHandler = () => {
    setDummyClassroom((prev) => {
      prev.map((classroom) => {
        if (classroom.id === state.editId) {
          classroom.name = state.name;
          classroom.teacher = state.teacher;
        }
        return classroom;
      });
      return prev;
    });
    setDummyStudent((prev) => {
      return prev.map((student) => {
        if (addedStudent.some((aStudent) => aStudent.id === student.id)) {
          student.class = state.editId;
        }
        return student;
      });
    });
    setAddedStudent([]);
    dispatch({ type: ACTION.NEW_EDIT_ID });
  };

  const onRemoveHandler = (id: string) => {
    const result = addedStudent.filter((student) => student.id !== id);
    setAddedStudent(result);
  };

  const onAddHandler = () => {
    if (
      DummyStudent.filter((student) => student.class !== state.editId)
        .length !== 0
    )
      dispatch({ type: ACTION.NEW_SEARCH, payload: "student" });
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className={classes.container}>
          <StudentContainer value={DummyStudent} />
          <div className={classes.classContainer}>
            {DummyClassroom.map((_class) => {
              return (
                <Class
                  class={_class}
                  value={DummyStudent}
                  key={_class.id}
                  onEdit={onEditHandler}
                />
              );
            })}
          </div>
          <DragOverlay>
            {typeof activeStu !== "string" && activeStu !== undefined ? (
              <Item student={activeStu} dragStyle={{ cursor: "grabbing" }} />
            ) : null}
          </DragOverlay>
        </div>
      </DndContext>
      {state.editId ? (
        <Modal className={classes.modal}>
          <h1>Edit on ID : {state.editId}</h1>
          <div className={classes.wrapper}>
            <div className={classes.inputContainer}>
              <p>Class : </p>
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
                  dispatch({ type: ACTION.NEW_SEARCH, payload: "teacher" });
                }}
              >
                {Dummy.teacher.find((teacher) => teacher.id === state.teacher)
                  ?.name || ""}
              </div>
            </div>
            <AddedStudent
              list={addedStudent}
              onRemove={onRemoveHandler}
              onAdd={onAddHandler}
            />
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
      {state.isSearch === "teacher" ? search(state.searchValue) : null}
      {state.isSearch === "student" ? studentSearch(state.searchValue) : null}
    </>
  );

  function onDragStart(event: DragStartEvent) {
    const { active } = event;
    const indexOfStudent = DummyStudent.findIndex(
      (student) => student.id === active.id
    );

    const activeStudent = DummyStudent[indexOfStudent] || undefined;
    if (!activeStudent) return;
    activeStudent.class = "-1";

    setDummyStudent((prev) => {
      prev.splice(indexOfStudent, 1);
      return prev;
    });
    setActiveStu(activeStudent);
  }

  function onDragEnd(event: DragEndEvent) {
    const { over } = event;
    const overId = over?.id;
    if (!activeStu) return;
    setDummyStudent((prev) => {
      activeStu.class = overId ? overId.toString() : "";
      prev.push(activeStu);
      return prev;
    });
    setActiveStu(undefined);
  }
}

export default Classroom;
