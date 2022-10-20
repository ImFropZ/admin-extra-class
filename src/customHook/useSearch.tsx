import { ChangeEventHandler } from "react";
import { SpyglassIcon } from "../assets/svg";
import { Modal } from "../components";
import classes from "./hook.module.css";

interface useSearchProps {
  list: Array<any>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSelected: (key: string | number) => void;
  className?: string;
}

function useSearch({ list, onChange, onSelected, className }: useSearchProps) {
  return (value?: string) => {
    return (
      <Modal>
        <div className={`${classes.wrapper} ${className}`}>
          <div className={classes.search}>
            <SpyglassIcon />
            <input
              type="text"
              placeholder="Search"
              value={value || ""}
              onChange={onChange}
            />
          </div>
          <div className={classes.container}>
            {list.map((el) => {
              if (el.name.toLowerCase().includes(value?.toLowerCase() || ""))
                return (
                  <div key={el.id} onClick={() => onSelected(el.id)}>
                    {el.id}. {el.name}
                  </div>
                );
            })}
          </div>
        </div>
      </Modal>
    );
  };
}

export default useSearch;
