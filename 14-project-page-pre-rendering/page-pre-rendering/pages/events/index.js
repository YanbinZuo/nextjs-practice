import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents, getFeaturedEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

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

export default AllEventsPage;
