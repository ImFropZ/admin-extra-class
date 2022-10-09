import classes from "./login.module.css";
import { Logo, Login as LoginPanel } from "../../components";

function Login() {
  return (
    <div className={classes.container}>
      <Logo />
      <LoginPanel />
    </div>
  );
}

export default Login;
