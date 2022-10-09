import React from "react";
import { useDroppable } from "@dnd-kit/core";
import classes from "./dnd.module.css";
import { Item } from "./";

interface Props {
  isInside: boolean;
}

function Container(props: Props) {
  const { isInside } = props;
  const { setNodeRef } = useDroppable({
    id: "container",
  });

  return (
    <div className={classes.container} ref={setNodeRef}>
      {isInside ? <Item isInside={!isInside} /> : null}
    </div>
  );
}

export default Container;
