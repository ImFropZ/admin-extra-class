import { EditIcon, DeleteIcon } from "../assets/svg";

function useAction(containerClassName?: string) {
  const func = () => {
    return (
      <div className={containerClassName}>
        <EditIcon />
        <DeleteIcon />
      </div>
    );
  };

  return func;
}

export default useAction;
