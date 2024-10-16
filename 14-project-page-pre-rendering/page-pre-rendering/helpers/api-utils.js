export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-project-c1b4b-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const formedEvents = [];
  for (const key in data) {
    formedEvents.push({
      id: key,
      ...data[key],
    });
  }

  return formedEvents;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const date = new Date(event.date);
    return date.getFullYear() === year && date.getMonth() === month - 1;
  });
  return filteredEvents;
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
