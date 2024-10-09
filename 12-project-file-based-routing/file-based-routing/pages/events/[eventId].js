import EventContent from "@/components/eventDetails/EventContent";
import EventLogistics from "@/components/eventDetails/EventLogistics";
import EventSummary from "@/components/eventDetails/EventSummary";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent><p>{event.description}</p></EventContent>
    </>
  );
}

export default EventDetailsPage;
