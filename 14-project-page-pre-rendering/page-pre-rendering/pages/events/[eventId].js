import EventContent from "@/components/eventDetails/EventContent";
import EventLogistics from "@/components/eventDetails/EventLogistics";
import EventSummary from "@/components/eventDetails/EventSummary";
import Comments from "@/components/input/Comments";
import MetaData from "@/components/metaData/MetaData";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import { notFound } from "next/navigation";
import React from "react";

function EventDetailsPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <MetaData title={event.title} content={event.description} />
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  // if(!event) {
  //   return {
  //     notFound: true
  //   }
  // }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
    notFound: !event,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return { paths: paths, fallback: "blocking" };
}

export default EventDetailsPage;
