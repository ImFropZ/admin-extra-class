import { useDraggable } from "@dnd-kit/core";
import React from "react";
import classes from "./dnd.module.css";

interface Props {
  id: number;
}

function Student(props: Props) {
  // const { id } = props;
  // const { listeners, attributes, setNodeRef } = useDraggable({
  //   id,
  // });

  // return isInside ? null : (
  //   <div
  //     className={classes.item}
  //     ref={setNodeRef}
  //     {...listeners}
  //     {...attributes}
  //     style={{ cursor: "grabbing" }}
  //   >
  //     <h3>Drag me!</h3>
  //   </div>
  // );
  return;
}

export default Student;
