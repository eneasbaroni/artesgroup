"use client";
import { motion } from "framer-motion";
import {
  ABOUT_TEXT,
  CULTURAL_PRODUCTIONS,
  INTERNATIONAL_PRODUCTIONS,
  NATIONAL_PRODUCTIONS,
} from "./constants";
import Events from "../views/Events/Events";

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

const words = ABOUT_TEXT.split(" ");

const About = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[url('/images/show.jpeg')] bg-cover bg-center">
        <div className="w-full p-10 mobile:mt-20">
          <div className="max-w-200 mobile:w-auto mobile:max-w-130 p-10 mobile:p-4 darker-glass rounded-4xl border border-white/10">
            <h1 className="font-anton text-7xl tablet:text-6xl mobile:text-4xl leading-24 tablet:leading-20 mobile:leading-14 text-center">
              NOSOTROS
            </h1>
            <p className="mobile:text-sm">
              Artes Group es una empresa argentina líder en la realización y
              organización de espectáculos y eventos especiales, tanto en la
              República Argentina como en el resto de América. Dirigida por
              Alberto Miguel, con 30 años de trayectoria en el campo de la
              cultura en sus diferentes expresiones, realizando innumerables
              producciones privadas y para organismos públicos. Experiencia y
              crecimiento son lo que permiten a Artes Group posicionarse como un
              referente indiscutido en el mercado en cuanto a la producción
              integral de conciertos, eventos y management de artistas. La
              empresa con base en Buenos Aires, Argentina, se destaca por
              implementar tecnologías de última generación y conceptos aplicados
              a la realización y organización de eventos.
            </p>
          </div>
        </div>
      </div>
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
      <div className="mt-40 py-4 mobile:mb-40  w-full flex flex-col justify-center relative">
        {/*  <div className="absolute h-full w-200 top-0  right-1/2 translate-x-1/2 flex justify-end items-end">
                    <motion.div
                        className=" h-full bg-ag-magent origin-right"
                        initial={{ width: 800 }}
                        whileInView={{ width: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{
                            once: true,
                        }}
                    ></motion.div>
                </div> */}
        <div className="max-w-200 p-10 text-center font-anton text-2xl mobile:text-lg leading-10 mobile:leading-7 m-auto">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      </div>
      <Events />
    </div>
  );
};
export default About;
