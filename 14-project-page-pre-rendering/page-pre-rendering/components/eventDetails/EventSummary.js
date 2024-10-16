import React from 'react'
import classes from "./styles/EventSummary.module.css"

function EventSummary({title}) {
  return (
    <div className={classes.title}><h1>{title}</h1></div>
  )
}

export default EventSummary