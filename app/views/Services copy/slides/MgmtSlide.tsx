import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { motion } from "framer-motion";

const ManagementSlide = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.8]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["0px", "50px"],
  );
  const rotate = useTransform(scrollYProgress, [0.4, 0.6], ["0deg", "5deg"]);
  return (
    <motion.div
      id="mgmt"
      className="w-full h-screen px-10 sticky top-0 flex items-center justify-center flex-col bg-[url('/images/Mgmt.png')] bg-cover bg-center"
      style={{ scale, borderRadius, rotate }}
    >
      <div className="max-w-170 text-center darker-glass p-10 rounded-4xl border border-white/10">
        <h3 className="font-anton text-[40px] mobile:text-3xl">MANAGEMENT</h3>
        <p className="mobile:text-sm mobile:leading-4">
          Trabajamos en conjunto con nuestros artistas para potenciar sus
          carreras y desarrollar nuevas oportunidades de crecimiento. Trabajamos
          estrategias que fortalezcan su desarrollo a largo plazo. Buscamos
          optimizar la monetización de su contenido. Sumamos creatividad, orden
          y planificación para que los artistas puedan enfocarse en lo que mejor
          hacen: su arte.
        </p>
      </div>
    </motion.div>
  );
};
export default ManagementSlide;
