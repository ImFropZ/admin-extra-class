// import classes from "./teacher.module.css";
import { DataTable, SectionHeader } from "../../components";
import Dummy from "../../DummyData";

function Teacher() {
  const head: string[] = [
    "ID",
    "Name",
    "Gender",
    "Telephone",
    "Email",
    "Description",
    "Action",
  ];
  const data: string[][] = [];

  Dummy.teacher.forEach((e) => {
    data.push([
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
        head={head}
        data={data}
        style={{
          head: [
            {
              id: "id",
              style: { width: "5%" },
            },
            {
              id: "name",
              style: { textAlign: "left", width: "15%" },
            },
            {
              id: "gender",
              style: { width: "5%" },
            },
            {
              id: "telephone",
              style: { width: "15%", textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "email",
              style: { width: "25%", textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "action",
              style: { width: "8%" },
            },
          ],
          body: [
            {
              id: "name",
              style: { textAlign: "left" },
            },
            {
              id: "telephone",
              style: { textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "email",
              style: { textAlign: "left", paddingLeft: "1.5em" },
            },
            {
              id: "description",
              style: { paddingLeft: "1.5em", textAlign: "left" },
            },
          ],
        }}
      />
    </>
  );
}

export default Teacher;
