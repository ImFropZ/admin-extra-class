import React from "react";
import classes from "./userContainer.module.css";
import { UnknownIcon } from "../../assets/";
import { CloseIcon } from "../../assets/svg";

interface UserContainerProps {
  onDelete?: () => void;
}

function UserContainer(props: UserContainerProps) {
  return (
    <div className={classes.container}>
      <span onClick={props.onDelete}>
        <CloseIcon />
      </span>
      <div className={classes.image}>
        <img src={UnknownIcon} alt="Unknown Profile" />
      </div>
      <div className={classes.info}>
        <p className={classes.name}>Full Name</p>
        <p className={classes.role}>Role Name</p>
      </div>
    </div>
  );
}

export default UserContainer;
