import EventsList from "@/components/events/EventsList";
import MetaData from "@/components/metaData/MetaData";
import { getFeaturedEvents } from "@/helpers/api-utils";
import Head from "next/head";
import React from "react";

function HomePage(props) {
  return (
    <>
      <MetaData title="NextJS Events" content="Find a lot of great events that allow you to evolve..." />
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
