import classes from "./addedStudent.module.css";
import { CircleCrossIcon } from "../../assets/svg";
import Dummy from "../../DummyData";

interface AddedStudentProps {
  list?: Array<Dummy.Student>;
  onRemove: (id: string) => void;
  onAdd: () => void;
}

function AddedStudent(props: AddedStudentProps) {
  const { list, onRemove, onAdd } = props;

  return (
    <div className={classes.wrapper}>
      <p>Student : </p>
      <div className={classes.container}>
        <div className={classes.background} onClick={onAdd} />
        {list?.map((student) => {
          return (
            <span className={classes.item} key={student.id}>
              {student.name}
              <span
                className={classes.cross}
                onClick={() => onRemove(student.id)}
              >
                <CircleCrossIcon />
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default AddedStudent;
