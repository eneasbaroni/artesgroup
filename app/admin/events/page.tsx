import { notFound } from "next/navigation";
import EventInfoContainer from "./components/EventInfoContainer/EventInfoContainer";
import { getEvents } from "@/app/api/services";
import Link from "next/link";

const Events = async () => {
  const EVENTS = await getEvents();

  if (!EVENTS) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <EventInfoContainer EVENTS={EVENTS} />
      <Link
        href="/admin"
        className="w-auto m-auto mt-4 py-2 px-4 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer text-center"
      >
        Volver al panel
      </Link>
    </div>
  );
};

export default Events;
