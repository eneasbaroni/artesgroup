import { getEvents } from "@/app/api/services";
import EventsContainer from "./components/EventsContainer/EventsContainer";

const Events = async () => {
  const EVENTS = await getEvents();

  if (!EVENTS) {
    return <></>;
  }

  return <EventsContainer EVENTS={EVENTS} />;
};

export default Events;
