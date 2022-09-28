import { Outlet } from "react-router-dom";
import classes from "./header.module.css";
import {
  UserIcon,
  StudentIcon,
  TeacherIcon,
  DashboardIcon,
  ClassIcon,
  CourseIcon,
  ProfileIcon,
  ArrowIcon,
} from "../../assets/svg";
import { useState } from "react";

function Header() {
  const [isToggle, setToggle] = useState<Boolean>(false);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.dashboard}>
          <DashboardIcon />
          Dashboard
        </div>
        <div className={classes.teacher}>
          <TeacherIcon />
          Teacher
        </div>
        <div className={classes.course}>
          <CourseIcon />
          Course
        </div>
        <div className={classes.student}>
          <StudentIcon />
          Student
        </div>
        <div className={classes.class}>
          <ClassIcon />
          Class
        </div>
        <div className={classes.user}>
          <UserIcon />
          User
        </div>
        <div className={classes.container_profile}>
          <ProfileIcon />
          <div className={classes.username}>Username</div>
          <div
            className={classes.dropDown}
            onClick={() => setToggle((prev) => !prev)}
          >
            <ArrowIcon />
          </div>
          <div
            className={classes.dropDown_props}
            style={isToggle ? { display: "flex" } : { display: "none" }}
          >
            <div>Setting</div>
            <div>Logout</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
