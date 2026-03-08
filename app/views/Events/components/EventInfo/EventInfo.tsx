import TicketIcon from "@/app/icons/TicketIcon";
import { Event } from "@/app/types/event";
import { getDayOfWeek, formatShortDate, formatTime } from "@/app/helpers";
import { motion } from "framer-motion";

const variants = {
  initial: { height: "35px" },
  whileHover: { height: "auto", transition: { duration: 0.3 } },
};

const imgVariants = {
  initial: { opacity: 0 },
  whileHover: { opacity: 1, transition: { duration: 0.3 } },
};

const EventInfo = ({ event }: { event: Event }) => {
  return (
    <motion.div
      className="w-full pl-15 border-b border-white/20 flex flex-row items-stretch overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="whileHover"
      variants={variants}
    >
      <div className="w-70 flex flex-row items-start gap-4 pt-1">
        <h3 className="font-anton text-xl">{formatShortDate(event.date)}</h3>
        <div className="flex flex-row w-50 min-w-50 justify-center items-center">
          <h4 className="ml-4">{getDayOfWeek(event.date)}</h4>
          <div className="w-10 h-px m-2 bg-white"></div>
          <h4>{formatTime(event.date)}</h4>
        </div>
      </div>
      <motion.div className="w-70 relative self-stretch" variants={imgVariants}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={event.imgUrl}
          alt={event.artist}
        />
      </motion.div>
      <div className="flex-1 flex flex-col relative px-20 w-full justify-start pt-1">
        <h3 className="font-anton text-xl">{event.artist}</h3>
        <h4 className="font-light font-anton">{event.venue}</h4>
        <p className="mt-8 rounded-lg">
          {event.description}
          <br />
          <a
            href={event.salesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center font-anton"
          >
            Comprar <TicketIcon />
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default EventInfo;
