"use client";
import { motion } from "framer-motion";
import {
  CULTURAL_PRODUCTIONS,
  INTERNATIONAL_PRODUCTIONS,
  NATIONAL_PRODUCTIONS,
} from "@/app/about/constants";

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

const Productions = () => {
  return (
    <>
      <div className="w-full flex flex-col mt-10">
        <h2 className="ml-15 mobile:ml-10 mobile:mr-10 font-anton text-[40px] mobile:text-3xl">
          PRODUCCIONES INTERNACIONALES DESTACADAS
        </h2>
        <motion.ul
          className="border-t [&>li]:py-2 [&>li]:pl-15 mobile:[&>li]:pl-10 [&>li]:border-b mobile:text-sm"
          variants={variants}
          initial="initial"
          whileInView="animation"
          viewport={{
            once: true,
          }}
        >
          {INTERNATIONAL_PRODUCTIONS.map((production, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              className="hover:bg-ag-magent/50 transition-colors duration-300"
            >
              ● {production}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="w-full flex flex-col mt-10 text-left">
        <h2 className="mr-15 mobile:mr-10 mobile:ml-10 font-anton text-[40px] mobile:text-3xl text-right border-black/10">
          PRODUCCIONES NACIONALES DESTACADAS
        </h2>
        <motion.ul
          className="border-t text-end [&>li]:py-2 [&>li]:pr-15 mobile:[&>li]:pr-10 [&>li]:border-b mobile:text-sm"
          variants={variants}
          initial="initial"
          whileInView="animation"
          viewport={{
            once: true,
          }}
        >
          {NATIONAL_PRODUCTIONS.map((production, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              className="hover:bg-ag-magent/50 transition-colors duration-300"
            >
              {production} ●
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="w-full flex flex-col mt-10">
        <h2 className="ml-15 mobile:ml-10 mobile:mr-10 font-anton text-[40px] mobile:text-3xl">
          PRODUCCIONES CULTURALES Y TEATRALES
        </h2>
        <motion.ul
          className="border-t [&>li]:py-2 [&>li]:pl-15 mobile:[&>li]:pl-10 [&>li]:border-b mobile:text-sm"
          variants={variants}
          initial="initial"
          whileInView="animation"
          viewport={{
            once: true,
          }}
        >
          {CULTURAL_PRODUCTIONS.map((production, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              className="hover:bg-ag-magent/50 transition-colors duration-300"
            >
              ● {production}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Productions;
