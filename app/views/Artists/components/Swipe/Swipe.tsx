"use client";
import SwipeIcon from "@/app/icons/SwipeIcon";
import { motion } from "framer-motion";

const Swipe = () => {
  return (
    <motion.div
      initial={{ opacity: 1, rotate: 0 }}
      animate={{ opacity: [1, 1, 0], rotate: [0, -15, -15] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      <SwipeIcon />
    </motion.div>
  );
};

export default Swipe;
