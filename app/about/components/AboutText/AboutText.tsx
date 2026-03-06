"use client";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/app/about/constants";

const words = ABOUT_TEXT.split(" ");

const AboutText = () => {
  return (
    <div className="mt-40 py-4 mobile:mb-40  w-full flex flex-col justify-center relative">
      <div className="max-w-200 p-10 text-center font-anton text-2xl mobile:text-lg leading-10 mobile:leading-7 m-auto">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AboutText;
