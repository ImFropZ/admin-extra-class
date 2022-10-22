import { StudentContainer, Class, Item } from "../../components";
import classes from "./classroom.module.css";
import Dummy from "../../DummyData";
import { useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";

const data = Dummy.student.map((student) => {
  return { id: student.id, name: student.name, class: student.class };
});

function Classroom() {
  const [student, setStudent] = useState({
    student: data,
    class: Dummy.classroom,
  });

  const [activeStu, setActiveStu] = useState<{
    id: string;
    name: string;
    class: string;
  }>();

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className={classes.container}>
        <StudentContainer value={student.student} />
        <div className={classes.classContainer}>
          {student.class.map((_class) => {
            return (
              <Class
                class={_class}
                value={student.student}
                key={_class.id}
                onEdit={() => {}}
              />
            );
          })}
        </div>
        <DragOverlay>
          {typeof activeStu !== "string" && activeStu !== undefined ? (
            <Item student={activeStu} dragStyle={{ cursor: "grabbing" }} />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );

  function onDragStart(event: DragStartEvent) {
    const { active } = event;
    const indexOfStudent = student.student.findIndex(
      (student) => student.id === active.id
    );

    const activeStudent = student.student[indexOfStudent] || undefined;
    if (!activeStudent) return;
    activeStudent.class = "-1";

    setStudent((prev) => {
      prev.student.splice(indexOfStudent, 1);
      return { ...prev };
    });
    setActiveStu(activeStudent);
  }

  function onDragEnd(event: DragEndEvent) {
    const { over } = event;
    const overId = over?.id;
    if (!activeStu) return;
    setStudent((prev) => {
      activeStu.class = overId ? overId.toString() : "";
      prev.student.push(activeStu);
      return { ...prev };
    });
    setActiveStu(undefined);
  }
}

export default Classroom;
