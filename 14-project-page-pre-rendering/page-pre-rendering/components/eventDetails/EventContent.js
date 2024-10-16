import React from 'react'
import classes from './styles/EventContent.module.css'

function EventContent(props) {
  return (
    <div className={classes.content}>{props.children}</div>
  )
}

export default EventContent