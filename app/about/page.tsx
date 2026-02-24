"use client";
import { motion } from "framer-motion";
import {
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

const About = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('/images/show.jpeg')] bg-cover bg-center">
                <div>
                    <div className="w-200 p-10 darker-glass rounded-4xl border border-white/10">
                        <h1 className=" font-anton text-7xl leading-24 text-center">
                            NOSOTROS
                        </h1>
                        <p>
                            NOSOTROS Artes Group es una empresa argentina líder
                            en la realización y organización de espectáculos y
                            eventos especiales, tanto en la República Argentina
                            como en el resto de América. Dirigida por Alberto
                            Miguel, con 30 años de trayectoria en el campo de la
                            cultura en sus diferentes expresiones, realizando
                            innumerables producciones privadas y para organismos
                            públicos. Experiencia y crecimiento son lo que
                            permiten a Artes Group posicionarse como un
                            referente indiscutido en el mercado en cuanto a la
                            producción integral de conciertos, eventos y
                            management de artistas. La empresa con base en
                            Buenos Aires, Argentina, se destaca por implementar
                            tecnologías de última generación y conceptos
                            aplicados a la realización y organización de
                            eventos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col mt-10">
                <h2 className="ml-15 font-anton text-[40px]">
                    PRODUCCIONES INTERNACIONALES DESTACADAS
                </h2>
                <motion.ul
                    className="border-t [&>li]:py-2 [&>li]:pl-15 [&>li]:border-b"
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
                <h2 className="mr-15 font-anton text-[40px] text-right border-black/10">
                    PRODUCCIONES NACIONALES DESTACADAS
                </h2>
                <motion.ul
                    className="border-t text-end [&>li]:py-2 [&>li]:pr-15 [&>li]:border-b"
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
                <h2 className="ml-15 font-anton text-[40px]">
                    PRODUCCIONES CULTURALES Y TEATRALES
                </h2>
                <motion.ul
                    className="border-t [&>li]:py-2 [&>li]:pl-15 [&>li]:border-b"
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
            <div className="mt-40 py-4  w-full flex flex-col justify-center relative">
                <div className="absolute h-full w-200 top-0  right-1/2 translate-x-1/2 flex justify-end items-end">
                    <motion.div
                        className=" h-full bg-ag-magent origin-right"
                        initial={{ width: 800 }}
                        whileInView={{ width: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{
                            once: true,
                        }}
                    ></motion.div>
                </div>
                <p className="w-200 text-center font-anton text-2xl leading-10 m-auto">
                    Artes Group ha demostrado fehacientemente a lo largo de
                    estos años que es una empresa con credibilidad absoluta,
                    impecable en sus organizaciones y producciones y con una
                    infraestructura especializada para cada evento. Artes Group
                    es miembro de AADET, Asociación Argentina de Empresarios
                    Teatrales.
                </p>
            </div>
            <Events />
        </div>
    );
};
export default About;
