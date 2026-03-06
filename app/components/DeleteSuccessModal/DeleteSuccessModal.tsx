import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface DeleteSuccessModalProps {
  title: string;
  message: string;
  redirectUrl: string;
  redirectText?: string;
}

const DeleteSuccessModal = ({
  title,
  message,
  redirectUrl,
  redirectText = "Volver al listado",
}: DeleteSuccessModalProps) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(redirectUrl);
  };

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
          className="m-auto mt-10 w-auto max-w-130 p-10 mobile:p-5 text-center dark-glass rounded-4xl flex flex-col gap-4"
          initial={{ y: "-100dvh" }}
          animate={{
            y: 0,
            boxShadow: [
              "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
              "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)",
              "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
            ],
            border: [
              "1px solid rgba(34, 197, 94, 0.3)",
              "1px solid rgba(34, 197, 94, 0.5)",
              "1px solid rgba(34, 197, 94, 0.3)",
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
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h3 className="font-anton text-xl text-green-400">{title}</h3>
          <p className="text-white/80">{message}</p>

          <button
            onClick={handleRedirect}
            className="border border-green-500 bg-green-500/10 px-6 py-2 rounded-full hover:bg-green-500/20 transition-colors duration-300 cursor-pointer mt-4"
          >
            {redirectText}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeleteSuccessModal;
