import { DataTable, SectionHeader } from "../../components";
import { student } from "../../DummyData";

function Student() {
  const head: string[] = ["ID", "Name", "Gender", "Email", "Action"];
  const data: string[][] = [];

  student.forEach((e) => {
    data.push([e.id, e.name, e.gender, e.email, "D/E"]);
  });

  return (
    <>
      <SectionHeader
        title="Student Details"
        btnName="+ Create New Student"
        onCreate={() => {
          console.log("Student");
        }}
      />
      <DataTable head={head} data={data} />
    </>
  );
}

export default Student;
