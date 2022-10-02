import { DataTable, SectionHeader } from "../../components";
import { student } from "../../DummyData";

function Student() {
  let row: string[][] = [];

  student.forEach((e) => {
    row.push([e.id, e.name, e.gender, e.email, "D/E"]);
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
      <DataTable
        head={[
          { name: "ID" },
          { name: "Name" },
          { name: "Gender" },
          { name: "Email" },
          { name: "Action" },
        ]}
        data={{ row }}
      />
    </>
  );
}

export default Student;
