import React from "react";
import classes from "./styles/ErrorAlert.module.css";

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
