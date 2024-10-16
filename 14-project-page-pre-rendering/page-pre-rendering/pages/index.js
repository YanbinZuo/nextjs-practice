import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/helpers/api-utils";
import React from "react";

function HomePage(props) {
  return <EventsList items={props.events} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;

