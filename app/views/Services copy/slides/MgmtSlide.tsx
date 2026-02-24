import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { motion } from "framer-motion";

const ManagementSlide = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.8]);
    const borderRadius = useTransform(
        scrollYProgress,
        [0.5, 0.75],
        ["0px", "50px"],
    );
    return (
        <motion.div
            id="mgmt"
            className="w-full h-screen sticky top-0 flex items-center justify-center flex-col bg-[url('/images/Mgmt.png')] bg-cover bg-center"
            style={{ scale, borderRadius }}
        >
            <div className="max-w-170 text-center darker-glass p-10 rounded-4xl border border-white/10">
                <h3 className="font-anton text-[40px]">MANAGEMENT</h3>
                <p>
                    Trabajamos en conjunto con nuestros artistas para potenciar
                    sus carreras y desarrollar nuevas oportunidades de
                    crecimiento. Trabajamos estrategias que fortalezcan su
                    desarrollo a largo plazo. Buscamos optimizar la monetización
                    de su contenido. Sumamos creatividad, orden y planificación
                    para que los artistas puedan enfocarse en lo que mejor
                    hacen: su arte.
                </p>
            </div>
        </motion.div>
    );
};
export default ManagementSlide;
