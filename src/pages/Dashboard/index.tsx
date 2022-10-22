import React from "react";
import classes from "./dashboard.module.css";
import { Information, Graph, Event } from "../../components";
import Dummy from "../../DummyData";

function Dashboard() {
  return (
    <div className={classes.container}>
      <Information
        number={{
          teacher: Dummy.teacher.length,
          student: Dummy.student.length,
        }}
      />
      <Graph />
      <Event />
      {/* <div className={classes.etc}></div> */}
    </div>
  );
}

export default Dashboard;
