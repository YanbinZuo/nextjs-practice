import React from "react";
import MainHeader from "./MainHeader";
import Notification from "../ui/Notification";

function Layout(props) {
  return (
    <div>
      <MainHeader />
      <main>{props.children}</main>
      <Notification
        title="success title"
        message="it success"
        status="success"
      />
    </div>
  );
}

export default Layout;
