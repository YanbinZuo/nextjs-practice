import React from "react";
import classes from "./styles/Notification.module.css";

function Notification(props) {
  const { title, message, status } = props;
  let statusClasses = "";
  if (status === "success") {
    statusClasses = classes.success;
  } else if (status === "error") {
    statusClasses = classes.error;
  } else if (status === "pending") {
    statusClasses = classes.pending;
  }

  return (
    <div className={`${classes.notification} ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
