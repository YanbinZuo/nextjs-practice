import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import React from "react";

function AllEventsPage(props) {
  const router = useRouter();
  const {events} = props

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents
    },
    revalidate: 60
  }
}

export default AllEventsPage;
