import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { motion } from "framer-motion";

const DiscographySlide = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.9]);
    const borderRadius = useTransform(
        scrollYProgress,
        [0.75, 1],
        ["0px", "50px"],
    );
    return (
        <motion.div
            id="discography"
            className="w-full h-screen sticky top-0 flex items-center justify-center flex-col bg-[url('/images/Discography.png')] bg-cover bg-center"
            style={{ scale, borderRadius }}
        >
            <div className="max-w-170 text-center darker-glass p-10 rounded-4xl border border-white/10">
                <h3 className="font-anton text-[40px]">DISCOGRÁFICA</h3>
                <p>
                    Nos ocupamos de todo el recorrido de la música: producción,
                    distribución y lanzamiento para que la escuche el mundo
                    entero. Gestionamos la grabación, distribución y promoción
                    de cada proyecto para llegar a nuevas audiencias y
                    plataformas de manera estratégica. Impulsamos la música de
                    nuestros artistas desde la creación hasta el lanzamiento con
                    estrategia, planificación y creatividad.
                </p>
            </div>
        </motion.div>
    );
};
export default DiscographySlide;
