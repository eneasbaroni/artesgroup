"use client";
import AnimatedNumber from "@/app/components/AnimatedNumber/AnimatedNumber";
import { calculatePercentage } from "../../helpers/calculatePercentage";
import { AGE_LABELS } from "./constants";
import type { AgeStatisticsProp } from "./types";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const AgeStatistics = ({ age }: AgeStatisticsProp) => {
  const total = Object.values(age).reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <div className="flex flex-col gap-4 items-start group">
        {Object.entries(age).map(([ageRange, count]) => {
          const percentage = parseFloat(calculatePercentage(count, total));

          return (
            <div
              key={ageRange}
              className="flex flex-row gap-2 items-center w-full "
            >
              <div className="text-xs text-gray-400 w-25 mobile:w-15">
                {AGE_LABELS[ageRange]}
              </div>

              <motion.div
                className="h-8 min-w-px bg-linear-to-r from-ag-magent group-hover:opacity-40 hover:opacity-100! to-pink-400 rounded-e-lg transition-all duration-500"
                /* style={{ width: `${percentage}%` }} */
                initial={{ width: "1%" }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
                data-tooltip-id={`age-tooltip-${ageRange}`}
                data-tooltip-content={`${count}`}
              ></motion.div>
              <Tooltip
                id={`age-tooltip-${ageRange}`}
                className="bg-dark-glass text-white text-sm rounded-lg p-2"
              />

              <div className="text-lg mobile:text-base font-anton font-bold text-ag-magent w-auto text-right shrink-0">
                <AnimatedNumber
                  value={percentage}
                  duration={1.2}
                  ease="easeOut"
                />
                %
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeStatistics;
