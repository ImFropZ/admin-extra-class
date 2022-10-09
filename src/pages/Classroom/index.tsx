import { DragAndDrop } from "../../components";
import { StudentContainer, Class } from "../../components";
import classes from "./classroom.module.css";

function Classroom() {
  return (
    <div className={classes.container}>
      <StudentContainer />
      <div className={classes.classContainer}>
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
      </div>
    </div>
  );
}

export default Classroom;
