import React from "react";
import classes from "./styles/EventLogistics.module.css";
import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

function EventLogistics(props) {
  const { id, title, location, date, image } = props.event;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  const formattedAddress = location.replace(", ", "\n");
  return (
    <div className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </div>
  );
}

export default EventLogistics;
