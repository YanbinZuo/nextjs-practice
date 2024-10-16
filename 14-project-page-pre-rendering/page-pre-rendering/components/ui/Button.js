import React from "react";
import classes from "./styles/Button.module.css";
import Link from "next/link";

function Button(props) {
  const { link } = props;
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
