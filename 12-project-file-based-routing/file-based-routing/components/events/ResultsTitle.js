import React from 'react'
import classes from "./styles/ResultsTitle.module.css"
import Button from '../ui/Button';

export const ResultsTitle = (props) => {
  const {date} = props;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: "long",
    year: 'numeric'
  })
  return (
    <section className={classes.title}>
      <h1>Events in {formattedDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  )
}
