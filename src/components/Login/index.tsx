import classes from "./login.module.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const regEx = {
    // min 8 - max 20 Char, no "_" or "." or "__" or "_." or "._"
    username: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g,
    // min 8 Char, 1 numb, 1 letter, 1 special char
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    if (!username.match(regEx.username) || !password.match(regEx.password))
      return;

    if (username === "HelloWorld" && password === "HelloWorld@1") {
      localStorage.setItem("auth", "1");
      nav("/");
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={classes.username}
          placeholder="Username"
          autoComplete="off"
          ref={usernameRef}
        />
        <input
          type="password"
          className={classes.password}
          placeholder="Password"
          ref={passwordRef}
        />
        <input type="submit" value="Login" className={classes.btn} />
      </form>
      <div className={classes.linkContainer}>
        <a href="#" className={classes.link}>
          Create Account?
        </a>
        <a href="#" className={classes.link}>
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default Login;
