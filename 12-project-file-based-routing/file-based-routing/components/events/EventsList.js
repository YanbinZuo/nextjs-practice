import React from "react";
import EventItem from "./EventItem";
import classes from "./styles/EventsList.module.css";

function EventsList({ items }) {
  return (
    <ul className={classes.listContainer}>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventsList;
