import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Notification from "../ui/Notification";
import NotificationContext from "@/store/NotificationContext";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <div>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </div>
  );
}

export default Layout;
