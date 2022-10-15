import React from "react";
import classes from "./modal.module.css";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { className, children } = props;
  return (
    <>
      <div
        className={classes.wrapper}
        onClick={() => {
          console.log("count");
        }}
      />
      <div className={`${classes.container} ${className}`}>{children}</div>
    </>
  );
}

export default Modal;
