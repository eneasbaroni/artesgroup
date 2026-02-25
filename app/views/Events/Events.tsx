"use client";
import { motion } from "framer-motion";
import EventInfo from "./components/EventInfo/EventInfo";
import { EVENTS } from "./constats";
import EventInfoMobile from "./components/EventInfo/EventInfoMobile";

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

const Events = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <h2 className="ml-15 tablet:ml-10 font-anton text-[40px] mobile:text-3xl">
        PRÓXIMOS EVENTOS
      </h2>
      <motion.div
        className="w-full h-auto flex flex-col border-t mt-8"
        variants={variants}
        initial="initial"
        whileInView="animation"
        viewport={{
          once: true,
        }}
      >
        <div className="tablet:hidden">
          {EVENTS.map((event) => (
            <motion.div key={event.name} variants={itemAnimation}>
              <EventInfo key={event.name} {...event} />
            </motion.div>
          ))}
        </div>
        <div className="lg:hidden">
          {EVENTS.map((event) => (
            <EventInfoMobile key={event.name + "-mobile"} {...event} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
