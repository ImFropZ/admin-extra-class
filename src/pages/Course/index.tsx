import { DataTable, SectionHeader, Modal } from "../../components";
import { course, teacher, Teacher } from "../../DummyData";
import { useAction, useStar, useSearch } from "../../customHook";
import classes from "./course.module.css";
import { useState } from "react";

interface EditData {
  id: string;
  name: string;
  teacher: string;
  price: number;
  rate: string;
  description: string;
}

function Course() {
  const [courseName, setCourseName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [editData, setEditData] = useState<EditData>();
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher>();
  const [value, setValue] = useState("");
  const [courseData, setCourseData] = useState(course);

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
    list: teacher,
    onChange: (e) => {
      setValue(e.target.value);
    },
    onSelected: (key) => {
      setValue("");
      setIsSearch(false);
      setSelectedTeacher(teacher.find((tea) => tea.id === key));
    },
  });

  const editAction = (key: string) => {
    let data = courseData.find((c) => c.id === key);
    setCourseName(data?.name || "");
    setPrice(data?.price.toString() || "0");
    setDescription(data?.description || "");
    setEditData(data);
    setEditId(key);
  };

  const deleteAction = (key: string) => {
    setCourseData((prev) => {
      return prev.filter((el) => el.id !== key);
    });
  };

  const onDoneHandler = () => {
    const data = {
      name: courseName,
      teacher: selectedTeacher?.name || editData?.teacher,
      price,
      description,
    };
    setEditId("");
    setEditData(undefined);
    setSelectedTeacher(undefined);
    setCourseData((prev) => {
      return prev.map((el) => {
        if (el.id === editId) {
          el.name = data.name || "";
          el.teacher = data.teacher || "";
          el.price = parseInt(data.price || "0");
          el.description = data.description || "";
        }
        return el;
      });
    });
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

  console.log(courseData);

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
          <h1>Edit on {editData?.name}</h1>
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
                {selectedTeacher?.name || editData?.teacher}
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
                setEditData(undefined);
                setSelectedTeacher(undefined);
              }}
            >
              Cancel
            </button>
            <button onClick={onDoneHandler}>Done</button>
          </div>
        </Modal>
      ) : null}
      {isSearch ? search(value) : null}
    </>
  );
}

export default Course;
