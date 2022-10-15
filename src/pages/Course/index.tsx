import { DataTable, SectionHeader, Modal } from "../../components";
import { course } from "../../DummyData";
import { useAction, useStar } from "../../customHook";
import classes from "./course.module.css";
import { useState } from "react";

function Course() {
  const [editId, setEditId] = useState<string>("");
  const head: string[] = [
    "ID",
    "Name",
    "Teacher",
    "Price($)",
    "Description",
    "Rate",
    "Action",
  ];
  const data: any[][] = [];
  const star = useStar({
    totalStar: 5,
    containerClassName: classes.starContainer,
  });
  const action = useAction(classes.actionContainer);

  const editAction = (key: string) => {
    setEditId(key);
    console.log(key);
  };

  course.forEach((e) => {
    data.push([
      e.id,
      e.name,
      e.teacher,
      e.price.toString(),
      e.description,
      star(parseInt(e.rate)),
      action({ editAction: () => editAction(e.id) }),
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
          <h1>Edit on CourseName</h1>
          <div className={classes.wrapper}>
            <div className={classes.inputContainer}>
              <p>Name : </p>
              <input type="text" name="name" />
              <button>Done</button>
            </div>
            <div className={classes.inputContainer}>
              <p>Course : </p>
              <input type="text" name="CourseName" />
              <button>Done</button>
            </div>
            <div className={classes.inputContainer}>
              <p>Price($) : </p>
              <input type="text" name="price" />
              <button>Done</button>
            </div>
            <div className={classes.inputContainer}>
              <p>Description : </p>
              <textarea rows={7} cols={25} maxLength={125} name="description" />
              <button>Done</button>
            </div>
          </div>
          <div className={classes.action}>
            <button onClick={() => setEditId("")}>Cancel</button>
            <button>Done</button>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default Course;
