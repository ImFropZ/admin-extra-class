import { useDraggable } from "@dnd-kit/core";

interface Props {
  student: { id: string; name: string; class?: string };
  dragStyle?: React.CSSProperties;
}

function Item(props: Props) {
  const { student } = props;
  const { dragStyle } = props;
  const { listeners, attributes, setNodeRef } = useDraggable({
    id: student.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={dragStyle || { cursor: "grab" }}
    >
      {student.name}
    </div>
  );
}

export default Item;
