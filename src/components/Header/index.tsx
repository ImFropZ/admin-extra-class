import { Outlet, Link, useNavigate } from "react-router-dom";
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
  const nav = useNavigate();
  const [isToggle, setToggle] = useState<Boolean>(false);

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    nav("/login");
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.dashboard}>
          <Link to="/">
            <DashboardIcon />
            Dashboard
          </Link>
        </div>
        <div className={classes.teacher}>
          <Link to="/teacher">
            <TeacherIcon />
            Teacher
          </Link>
        </div>
        <div className={classes.course}>
          <Link to="/course">
            <CourseIcon />
            Course
          </Link>
        </div>
        <div className={classes.student}>
          <Link to="/student">
            <StudentIcon />
            Student
          </Link>
        </div>
        <div className={classes.class}>
          <Link to="/classroom">
            <ClassIcon />
            Class
          </Link>
        </div>
        <div className={classes.user}>
          <Link to="/user">
            <UserIcon />
            User
          </Link>
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
            className={classes.dropDown_content}
            style={
              isToggle
                ? { scale: "1 1", translate: "0 0" }
                : { scale: "1 0", translate: "0 -50%" }
            }
          >
            <Link to="/setting">
              <div className={`no-select`}>Setting</div>
            </Link>
            <div onClick={logoutHandler} className={`no-select`}>
              Logout
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
