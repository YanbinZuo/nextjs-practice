import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return <EventsList items={featuredEvents} />;
}

export default HomePage;
