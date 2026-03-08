"use client";
import { Event } from "@/app/types/event";
import { motion } from "framer-motion";
import EventInfo from "../EventInfo/EventInfo";
import EventInfoMobile from "../EventInfo/EventInfoMobile";

const variants = {
  initial: { opacity: 0, y: 100 },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  initial: { opacity: 0, y: 100 },
  animation: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const EventsContainer = ({ EVENTS }: { EVENTS: Event[] }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <h2 className="ml-15 tablet:ml-10 font-anton text-[40px] mobile:text-3xl">
        PRÓXIMOS EVENTOS
      </h2>

      {EVENTS.length === 0 ? (
        <div className="w-full h-auto flex flex-col">
          <h4 className="mt-4 mx-15 tablet:mx-10 font-anton">
            No hay eventos próximos disponibles.
            <br />
            Síguenos en nuestras redes sociales para estar al tanto de las
            novedades.
          </h4>
        </div>
      ) : (
        <motion.div
          className="w-full h-auto flex flex-col border-t border-t-white/20 mt-8"
          variants={variants}
          initial="initial"
          whileInView="animation"
          viewport={{
            once: true,
          }}
        >
          <div className="tablet:hidden">
            {EVENTS.map((event) => (
              <motion.div key={event.artist} variants={itemAnimation}>
                <EventInfo key={event.artist} event={event} />
              </motion.div>
            ))}
          </div>
          <div className="lg:hidden">
            {EVENTS.map((event) => (
              <EventInfoMobile key={event.artist + "-mobile"} event={event} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventsContainer;
