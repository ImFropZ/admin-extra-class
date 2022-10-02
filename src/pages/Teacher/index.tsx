// import classes from "./teacher.module.css";
import { DataTable, SectionHeader } from "../../components";
import { teacher } from "../../DummyData";

function Teacher() {
  let row: string[][] = [];

  teacher.forEach((e) => {
    row.push([
      e.id,
      e.name,
      e.gender,
      e.telephone,
      e.email,
      e.description,
      "D/E",
    ]);
  });

  return (
    <>
      <SectionHeader
        title="Teacher Details"
        btnName="+ Create New Teacher"
        onCreate={() => {
          console.log("teacher");
        }}
      />
      <DataTable
        head={[
          { name: "ID" },
          { name: "Name" },
          { name: "Gender" },
          { name: "Telephone" },
          { name: "Email" },
          { name: "Description" },
          { name: "Action" },
        ]}
        data={{
          row,
          dataStyle: [{ name: "ID", style: { fontSize: "5em" } }],
        }}
      />
    </>
  );
}

export default Teacher;
