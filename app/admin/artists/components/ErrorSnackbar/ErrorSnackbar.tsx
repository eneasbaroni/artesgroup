import { motion } from "framer-motion";
import { useEffect } from "react";

interface ErrorSnackbarProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const ErrorSnackbar = ({
  message,
  onClose,
  duration = 5000,
}: ErrorSnackbarProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="bg-red-900/90 backdrop-blur-lg border border-red-500/50 rounded-xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            !
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white mb-1">Error</h4>
            <p className="text-sm text-red-100">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 text-red-200 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorSnackbar;
