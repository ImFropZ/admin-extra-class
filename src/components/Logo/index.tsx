import classes from "./logo.module.css";
import LogoIcon from "../../assets/LogoIcon.png";

function Logo() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={LogoIcon} alt="#" />
      </div>
      <h1 className={classes.name}>Extra Class Management</h1>
    </div>
  );
}

export default Logo;
