"use client";

import { useRef } from "react";
import DiscographySlide from "./slides/DiscographySlide";
import EditorialSlide from "./slides/Editorial";
import ManagementSlide from "./slides/MgmtSlide";
import ProductionSlide from "./slides/ProductionSlide";
import { useScroll } from "motion/react";

const ServicesB = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  return (
    <div
      ref={container}
      className="relative w-full flex flex-col gap-0 h-[500vh]"
      id="services"
    >
      <EditorialSlide key="editorial" scrollYProgress={scrollYProgress} />
      <ProductionSlide key="production" scrollYProgress={scrollYProgress} />
      <ManagementSlide key="management" scrollYProgress={scrollYProgress} />
      <DiscographySlide key="discography" scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ServicesB;
