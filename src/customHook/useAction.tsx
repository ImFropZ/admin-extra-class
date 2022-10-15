import { EditIcon, DeleteIcon } from "../assets/svg";

interface UseAction {
  editAction?: () => void;
  deleteAction?: () => void;
}

function useAction(containerClassName?: string) {
  const func = ({ editAction, deleteAction }: UseAction) => {
    return (
      <div className={containerClassName}>
        <span onClick={editAction}>
          <EditIcon />
        </span>
        <span onClick={deleteAction}>
          <DeleteIcon />
        </span>
      </div>
    );
  };

  return func;
}

export default useAction;
