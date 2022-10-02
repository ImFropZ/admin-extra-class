import classes from "./infomation.module.css";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

interface Props {
  number: {
    teacher: number;
    student: number;
  };
}

function Infomation(props: Props) {
  Chart.register(ArcElement);
  const { teacher, student } = props.number;

  const data = {
    labels: ["Teacher", "Student"],
    datasets: [
      {
        data: [teacher, student],
        backgroundColor: ["#f009", "#00f9"],
        hoverBackgroundColor: ["#f00", "#00f"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={`${classes.container}`}>
      <h2 className={classes.title}>Infomation</h2>
      <div className={classes.chartContainer}>
        <Doughnut data={data} />
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.student}>
          Student: {data.datasets[0].data[1]}
        </div>
        <div className={classes.teacher}>
          Teacher: {data.datasets[0].data[0]}
        </div>
      </div>
    </div>
  );
}

export default Infomation;
