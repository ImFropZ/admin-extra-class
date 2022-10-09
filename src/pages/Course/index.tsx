import { DataTable, SectionHeader } from "../../components";
import { course } from "../../DummyData";

function Course() {
  const head: string[] = [
    "ID",
    "Name",
    "Teacher",
    "Price($)",
    "Description",
    "Rate",
    "Action",
  ];
  const data: string[][] = [];

  course.forEach((e) => {
    data.push([
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
      <DataTable head={head} data={data} />
    </>
  );
}

export default Course;
