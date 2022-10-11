import classes from "./studentContainer.module.css";
import { SpyglassIcon } from "../../assets/svg";
import { Item } from "../";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  value: {
    id: string;
    name: string;
    class?: string;
  }[];
}

function StudentContainer(props: Props) {
  const students = props.value;
  const { setNodeRef } = useDroppable({
    id: "",
  });

  return (
    <div className={classes.container} ref={setNodeRef}>
      <div>
        <div className={classes.search}>
          <SpyglassIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className={classes.studentContainer}>
          {students.map((student) => {
            return student.class === "" ? (
              <Item student={student} key={student.id} />
            ) : null;
          })}
        </div>
      </div>
      <button className={classes.btn}>Create New Class</button>
    </div>
  );
}

export default StudentContainer;
