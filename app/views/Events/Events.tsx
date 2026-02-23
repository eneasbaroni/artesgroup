import EventInfo from "./components/EventInfo/EventInfo";
import { EVENTS } from "./constats";

const Events = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h2 className="ml-15 font-anton text-[40px]">PRÓXIMOS EVENTOS</h2>
      <div className="w-full h-auto flex flex-col border-t mt-8">
        {EVENTS.map((event) => (
          <EventInfo key={event.name} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
