import EventsList from "@/components/events/EventsList";
import { ResultsTitle } from "@/components/events/ResultsTitle";
import MetaData from "@/components/metaData/MetaData";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import React from "react";

function SlugPage(props) {
  const router = useRouter();
  // const filterDate = router.query.slug;

  // if (!filterDate) {
  //   return <p className="center">Loading...</p>;
  // }

  const year = props.year;
  const month = props.month;

  const pageHeadData = (
    <MetaData
      title="Filtered Events"
      content={`All events for ${month}/${year}.`}
    />
  );

  if (props.hasError) {
    return (
      <>
        <MetaData
      title="Filtered Events"
      content={`All events for ${month}/${year}.`}
    />
        <MetaData
          title="Filtered Events"
          content={`All events for ${month}/${year}.`}
        />
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.filteredEvents;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const filterDate = context.params.slug;

  const year = +filterDate[0];
  const month = +filterDate[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year,
    month,
  });

  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}

export default SlugPage;
