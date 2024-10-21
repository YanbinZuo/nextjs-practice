import React, { useContext } from "react";
import classes from "./styles/Notification.module.css";
import NotificationContext from "@/store/NotificationContext";

function Notification(props) {
  const { title, message, status } = props;
  const notificationCtx = useContext(NotificationContext);
  // let statusClasses = "";
  // if (status === "success") {
  //   statusClasses = classes.success;
  // } else if (status === "error") {
  //   statusClasses = classes.error;
  // } else if (status === "pending") {
  //   statusClasses = classes.pending;
  // }

  return (
    <div className={`${classes.notification} ${classes[status]}`} 
      onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
