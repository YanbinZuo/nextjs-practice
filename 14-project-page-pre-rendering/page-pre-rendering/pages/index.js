import EventsList from "@/components/events/EventsList";
import NewsLetterRegistration from "@/components/input/NewsLetterRegistration";
import MetaData from "@/components/metaData/MetaData";
import { getFeaturedEvents } from "@/helpers/api-utils";
import React from "react";

function HomePage(props) {
  return (
    <>
      <MetaData title="NextJS Events" content="Find a lot of great events that allow you to evolve..." />
      <NewsLetterRegistration />
      <EventsList items={props.events} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
