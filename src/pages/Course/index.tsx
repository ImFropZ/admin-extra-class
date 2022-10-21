import { DataTable, SectionHeader, Modal } from "../../components";
import Dummy from "../../DummyData";
import { useAction, useStar, useSearch } from "../../customHook";
import classes from "./course.module.css";
import { useState } from "react";

function Course() {
  const [courseName, setCourseName] = useState<string>("");
  const [teacherName, setTeacherName] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const [description, setDescription] = useState<string>("");

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
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
      setSearchValue(e.target.value);
    },
    onSelected: (data) => {
      setSearchValue("");
      setTeacherName(data.name);
      setIsSearch(false);
    },
  });

  const editAction = (key: string) => {
    const data = courseData.find((c) => c.id === key);

    setCourseName(data?.name || "");
    setTeacherName(data?.teacher || "");
    setPrice(data?.price.toString() || "0");
    setDescription(data?.description || "");
    setEditId(key);
  };

  const deleteAction = (key: string) => {
    setCourseData((prev) => {
      return prev.filter((el) => el.id !== key);
    });
  };

  const onDoneHandler = () => {
    setCourseData((prev) => {
      return prev.map((el) => {
        if (el.id === editId) {
          el.name = courseName || "";
          el.teacher = teacherName || "";
          el.price = parseInt(price || "0");
          el.description = description || "";
        }
        return el;
      });
    });
    setEditId("");
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
      {editId ? (
        <Modal className={classes.modal}>
          <h1>Edit on ID : {editId}</h1>
          <div className={classes.wrapper}>
            <div className={classes.inputContainer}>
              <p>Name : </p>
              <input
                type="text"
                name="name"
                value={courseName}
                onChange={(e) => {
                  setCourseName(e.target.value);
                }}
              />
            </div>
            <div className={classes.inputContainer}>
              <p>Teacher : </p>
              <div className={classes.input} onClick={() => setIsSearch(true)}>
                {teacherName}
              </div>
            </div>
            <div className={classes.inputContainer}>
              <p>Price($) : </p>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={classes.action}>
            <button
              onClick={() => {
                setEditId("");
              }}
            >
              Cancel
            </button>
            <button onClick={onDoneHandler}>Done</button>
          </div>
        </Modal>
      ) : null}
      {isSearch ? search(searchValue) : null}
    </>
  );
}

export default Course;
