import React, { useState } from "react";
import {
  DndContext,
  DragStartEvent,
  DragEndEvent,
  useDraggable,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  closestCorners,
} from "@dnd-kit/core";
import Container from "./Container";
import classes from "./dnd.module.css";

export function Item(props: { isInside: boolean }) {
  const { isInside } = props;
  const { listeners, attributes, setNodeRef } = useDraggable({
    id: "item",
  });

  return isInside ? null : (
    <div
      className={classes.item}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ cursor: "grabbing" }}
    >
      <h3>Drag me!</h3>
    </div>
  );
}

function DragAndDrop() {
  const [isInside, setInside] = useState(false);
  const [isActive, setActive] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      // collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className={classes.screen}>
        {isInside ? null : <Item isInside={isInside} />}
        <Container isInside={isInside} />
        <DragOverlay>{isActive ? <Item isInside={false} /> : null}</DragOverlay>
      </div>
    </DndContext>
  );

  function onDragStart(event: DragStartEvent) {
    const { active } = event;
    console.log(active);
    setActive(true);
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    console.log(active, over);
    const { id } = active;
    const overId = over?.id;
    if (id === "item" && overId === "container") {
      setInside(true);
    } else {
      setInside(false);
    }
    setActive(false);
  }
}

export default DragAndDrop;
