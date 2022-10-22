import classes from "./class.module.css";
import { Item, Modal } from "../";
import { useDroppable } from "@dnd-kit/core";
import Dummy from "../../DummyData";
import { EditIcon } from "../../assets/svg";

interface Props {
  class: { id: string; name: string; teacher: string };
  value: {
    id: string;
    name: string;
    class?: string;
  }[];
  onEdit: React.MouseEventHandler<SVGSVGElement>;
}

function Class(props: Props) {
  const students = props.value;
  const classroom = props.class;
  const teacherName = Dummy.teacher.find((teacher) => {
    return teacher.id === classroom.teacher;
  })?.name;

  const { setNodeRef } = useDroppable({
    id: classroom.id,
  });

  return (
    <div className={classes.container} ref={setNodeRef}>
      <EditIcon onClick={props.onEdit} />
      <div className={classes.studentContainer}>
        {students.map((student) => {
          if (student.class !== classroom.id) return;
          return <Item student={student} key={student.id} />;
        })}
      </div>
      <div className={classes.titleContainer}>
        <p>{classroom.name}</p>
        <p>{teacherName}</p>
      </div>
    </div>
  );
}

export default Class;
