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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff8",
          zIndex: "99",
        }}
      />
      <div
        className={`${className || ""}`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          zIndex: "100",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
