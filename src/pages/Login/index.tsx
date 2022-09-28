import classes from "./login.module.css";
import { Logo, Login as _Login } from "../../components";

function Login() {
  return (
    <div className={classes.container}>
      <Logo />
      <_Login />
    </div>
  );
}

export default Login;
