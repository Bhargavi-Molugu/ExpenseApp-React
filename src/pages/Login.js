import React from "react";
import Card from "../Components/UI/Card/Card";
import classes from "../pages/css/Login.module.css";
import Button from "../Components/UI/Button/Button";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const submitHandler = () => {
        history.push('/home');
    }
  return (
    <Card className={classes.login}>
      <form>
        <div className={`${classes.control}`}>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={submitHandler}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;