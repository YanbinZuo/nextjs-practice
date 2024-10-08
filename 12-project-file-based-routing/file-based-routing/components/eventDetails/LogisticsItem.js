import React from "react";
import classes from "./styles/LogisticsItem.module.css";

function LogisticsItem(props) {
  // destructuring assignment along with renaming
  const { icon: Icon } = props;
  
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
