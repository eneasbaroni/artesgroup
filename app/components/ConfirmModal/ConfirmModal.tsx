import { motion } from "framer-motion";

interface ConfirmModalProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const ConfirmModal = ({
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmModalProps) => {
  return (
    <motion.div
      className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onCancel}
    >
      <motion.div
        className="m-auto w-auto max-w-130 p-10 mobile:p-5 text-center dark-glass rounded-4xl flex flex-col gap-4 border border-white/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-anton text-xl text-red-400">{title}</h3>
        <p className="text-white/80">{message}</p>

        <div className="flex flex-row mobile:flex-col gap-4 justify-center items-center mt-4">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="border border-white/10 px-6 py-2 rounded-full hover:bg-white/5 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="border border-red-500 bg-red-500/10 px-6 py-2 rounded-full hover:bg-red-500/20 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Eliminando..." : confirmText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmModal;
