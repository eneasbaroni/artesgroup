import { getEvents } from "@/app/api/services";
import EventsContainer from "./components/EventsContainer/EventsContainer";

const Events = async () => {
  const EVENTS = await getEvents();

  if (!EVENTS) {
    return <></>;
  }

  /* Filtrar eventos con adEnable true */
  const enabledEvents = EVENTS.filter((event) => event.adEnable);

  /* Filtrar eventos que no han ocurrido aún */
  const upcomingEvents = enabledEvents.filter(
    (event) => new Date(event.date) > new Date(),
  );

  return <EventsContainer EVENTS={upcomingEvents} />;
};

export default Events;
