import { DataTable, SectionHeader } from "../../components";
import { course } from "../../DummyData";

function Course() {
  let row: string[][] = [];

  course.forEach((e) => {
    row.push([
      e.id,
      e.name,
      e.teacher,
      e.price.toString(),
      e.description,
      e.rate,
      "D/E",
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
        head={[
          { name: "ID" },
          { name: "Name" },
          { name: "Teacher" },
          { name: "Price($)" },
          { name: "Description" },
          { name: "Rate" },
          { name: "Action" },
        ]}
        data={{ row }}
      />
    </>
  );
}

export default Course;
