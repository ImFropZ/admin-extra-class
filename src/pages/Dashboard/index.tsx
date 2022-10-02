import React from "react";
import classes from "./dashboard.module.css";
import { Information, Graph, Event } from "../../components";
import { student, teacher } from "../../DummyData";

function Dashboard() {
  return (
    <div className={classes.container}>
      <Information
        number={{ teacher: teacher.length, student: student.length }}
      />
      <Graph />
      <Event />
      {/* <div className={classes.etc}></div> */}
    </div>
  );
}

export default Dashboard;
