import { Event } from "@/app/types/event";
import EventItem from "../EventItem/EventItem";

const EventInfoContainer = ({ EVENTS }: { EVENTS: Event[] }) => {
  return (
    <div className="w-full pt-25 min-h-[calc(100dvh-100px)] flex items-center">
      <div className="w-full flex flex-col">
        <h2 className="ml-5 font-anton text-[40px] tablet:text-3xl mobile:text-center mobile:mb-6">
          EVENTOS CARGADOS
        </h2>
        <div className="w-full flex flex-col border-t border-t-white/10">
          {EVENTS.map((event) => (
            <EventItem key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventInfoContainer;
