"use client";
import TicketIcon from "@/app/icons/TicketIcon";
import { Event } from "@/app/types/event";
import { motion } from "framer-motion";
import { getDayOfWeek, formatShortDate, formatTime } from "@/app/helpers";

const EventInfoMobile = ({ event }: { event: Event }) => {
  return (
    <motion.div
      className="w-full h-auto border-b flex flex-col py-5 px-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      <div className="w-full flex flex-row justify-between items-center text-sm">
        <h4 className="w-30 min-w-30">{formatShortDate(event.date)}</h4>
        <div className="flex flex-row justify-between items-center">
          <h4 className="ml-4">{getDayOfWeek(event.date)}</h4>
          <div className="w-10 h-px m-2 bg-white"></div>
          <h4>{formatTime(event.date)}</h4>
        </div>
      </div>
      <h3 className="font-anton text-3xl mt-5">{event.artist}</h3>
      <h4 className="font-light font-anton text-lg">{event.venue}</h4>
      <p className="mt-8 text-sm">
        {event.description}
        <br />
        <span className="flex flex-row items-center font-anton mt-5">
          Comprar <TicketIcon />
        </span>
      </p>
    </motion.div>
  );
};

export default EventInfoMobile;
