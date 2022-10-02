import { SectionHeader } from "../../components";
import classes from "./classroom.module.css";

function Classroom() {
  return (
    <>
      <SectionHeader
        title="Class Details"
        btnName="+ Create New Class"
        onCreate={() => {
          console.log("Class");
        }}
      />
    </>
  );
}

export default Classroom;
