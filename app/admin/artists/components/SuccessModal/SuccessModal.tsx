import Link from "next/link";
import { motion } from "framer-motion";

type SuccessModalProps = {
  onClose: () => void;
};

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <motion.div
      className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full p-10">
        <motion.div
          className="m-auto mt-10 w-auto max-w-130 p-10 mobile:p-5  text-center dark-glass rounded-4xl flex flex-col gap-4"
          initial={{ y: "-100dvh" }}
          animate={{
            y: 0,
            boxShadow: [
              "0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)",
              "0 0 30px rgba(236, 113, 72, 0.5), 0 0 60px rgba(236, 113, 72, 0.3)",
              "0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)",
            ],
            border: [
              "1px solid rgba(236, 72, 153, 0.3), 1px solid rgba(236, 72, 153, 0.2)",
              "1px solid rgba(236, 113, 72, 0.5), 1px solid rgba(236, 113, 72, 0.3)",
              "1px solid rgba(236, 72, 153, 0.3), 1px solid rgba(236, 72, 153, 0.2)",
            ],
          }}
          exit={{ y: "-100dvh" }}
          transition={{
            y: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            boxShadow: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            border: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <h3 className="font-anton text-xl">Artista guardado exitosamente!</h3>
          <p>El artista ha sido guardado correctamente en la base de datos.</p>

          <div className="flex flex-row mobile:flex-col gap-4 justify-center items-center">
            <Link
              href="/admin"
              className="border border-white/10 px-4 py-2 rounded-full hover:bg-ag-magent transition-colors duration-300 cursor-pointer"
            >
              Volver a panel admin
            </Link>
            <button
              onClick={onClose}
              className="border border-white/10 px-4 py-2 rounded-full hover:bg-ag-magent transition-colors duration-300 cursor-pointer"
            >
              Agregar nuevo artista
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessModal;
