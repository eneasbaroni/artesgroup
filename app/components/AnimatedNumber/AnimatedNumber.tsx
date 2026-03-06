"use client";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
};

function AnimatedNumber({
  value,
  duration = 1.5,
  ease = "easeOut",
}: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once: true → solo anima una vez

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration, ease });
    }
  }, [isInView, value, motionValue, duration, ease]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default AnimatedNumber;
