"use client";
import AnimatedNumber from "@/app/components/AnimatedNumber/AnimatedNumber";
import type { SexStatisticsProp } from "./types";
import { motion } from "framer-motion";

const SexStatistics = ({ sex }: SexStatisticsProp) => {
  return (
    <div>
      <div className="w-auto flex flex-row items-center gap-2">
        <p className="font-anton mobile:text-sm">Masculino</p>
        <div className="w-60 h-10 mobile:h-7 flex bg-ag-magent/60 rounded-full">
          <motion.div
            className="h-10 mobile:h-7 bg-ag-magent rounded-full flex items-center justify-center text-sm mobile:text-xs"
            style={{ width: `${sex.male}%` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${sex.male}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AnimatedNumber value={sex.male} duration={1.2} ease="easeOut" />%
          </motion.div>
          <div
            className="h-10 mobile:h-7 flex items-center justify-center text-sm mobile:text-xs "
            style={{ width: `${sex.female}%` }}
          >
            <AnimatedNumber value={sex.female} duration={1.2} ease="easeOut" />%
          </div>
        </div>
        <p className="font-anton mobile:text-sm">Femenino</p>
      </div>
    </div>
  );
};

export default SexStatistics;
