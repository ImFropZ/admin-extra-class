import React from "react";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { className, children } = props;
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "100 !important",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff8",
        }}
      />
      <div
        className={`${className || ""}`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
