import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { motion } from "framer-motion";

const EditorialSlide = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.25],
        ["0px", "50px"],
    );
    const rotate = useTransform(scrollYProgress, [0, 0.33], ["0deg", "5deg"]);
    return (
        <motion.div
            id="editorial"
            className="w-full h-screen sticky top-0 flex items-center justify-center flex-col bg-[url('/images/Editorial.png')] bg-cover bg-center"
            style={{ scale, borderRadius, rotate }}
        >
            <div className="max-w-170 text-center darker-glass p-10 rounded-4xl border border-white/10">
                <h3 className="font-anton text-[40px]">EDITORIAL</h3>
                <p>
                    Gestionamos los derechos de autor y protegemos el talento de
                    los artistas que confían en nuestra experiencia.
                    Administramos tu catálogo musical con claridad y estrategia,
                    garantizando que tus canciones estén seguras y activas en
                    todos los frentes. Mientras vos creás, nosotros nos
                    encargamos de tus derechos de autor y del cuidado de cada
                    canción.
                </p>
            </div>
        </motion.div>
    );
};
export default EditorialSlide;
