import classes from "./studentContainer.module.css";
import { SpyglassIcon } from "../../assets/svg";
import { Item } from "../";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

interface Props {
  value: Array<{
    id: string;
    name: string;
    class?: string;
  }>;
}

function StudentContainer(props: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const students = props.value;
  const { setNodeRef } = useDroppable({
    id: "",
  });

  return (
    <div className={classes.container} ref={setNodeRef}>
      <div>
        <div className={classes.search}>
          <SpyglassIcon />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className={classes.studentContainer}>
          {students.map((student) => {
            if (student.name.includes(searchValue)) {
              return student.class === "" ? (
                <Item student={student} key={student.id} />
              ) : null;
            }
          })}
        </div>
      </div>
      <button className={classes.btn}>Create New Class</button>
    </div>
  );
}

export default StudentContainer;
