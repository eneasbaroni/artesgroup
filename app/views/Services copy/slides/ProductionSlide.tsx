import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { motion } from "framer-motion";

const ProductionSlide = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["0px", "50px"],
  );
  const rotate = useTransform(scrollYProgress, [0.2, 0.4], ["0deg", "-5deg"]);
  return (
    <motion.div
      id="production"
      className="w-full h-screen px-10 sticky top-0 flex items-center justify-center flex-col bg-[url('/images/Production.png')] bg-cover bg-center"
      style={{ scale, borderRadius, rotate }}
    >
      <div className="max-w-170 text-center darker-glass p-10 rounded-4xl border border-white/10">
        <h3 className="font-anton text-[40px] mobile:text-3xl">PRODUCCIÓN</h3>
        <p className="mobile:text-sm mobile:leading-4">
          Con más de 40 años de experiencia, hacemos realidad conciertos en
          vivo, giras nacionales e internacionales y eventos de entretenimiento
          inmersivo. Planificamos y ejecutamos producciones completas, cuidando
          cada detalle para que cada show llegue a su máximo potencial.
          Gestionamos todo lo que necesita un show para salir bien:
          organización, logística y cada detalle que hace que el evento
          funcione.
        </p>
      </div>
    </motion.div>
  );
};
export default ProductionSlide;
