"use client";

import DiscographySlide from "./slides/DiscographySlide";
import EditorialSlide from "./slides/Editorial";
import ManagementSlide from "./slides/MgmtSlide";
import ProductionSlide from "./slides/ProductionSlide";
import { useHorizontalSlider } from "./hooks/useHorizontalSlider";

/**
 * Service slides to be displayed in carousel
 */
const slides = [
  <EditorialSlide key="editorial" />,
  <ProductionSlide key="production" />,
  <ManagementSlide key="management" />,
  <DiscographySlide key="discography" />,
];

/**
 * Services Component
 *
 * Displays a horizontal carousel of service slides that navigate via vertical scroll.
 * Each slide takes up the full viewport width and height.
 *
 * Features:
 * - Discrete slide snapping (no peeking at adjacent slides)
 * - Wheel-based navigation with accumulation threshold
 * - Smooth animations with customizable easing
 * - Responsive to window resize
 */
const Services = () => {
  const { sectionRef, innerRef } = useHorizontalSlider({
    slidesCount: slides.length,
  });

  return (
    <div className="relative" id="services">
      {/*.
                Outer spacer defines vertical scroll height: one viewport per slide.
                Inside it, a sticky area keeps a full-screen viewport where the
                horizontal inner container is translated based on vertical scroll.
            */}
      <div
        ref={sectionRef}
        className="w-full"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
          <h2 className="absolute top-20 left-15 font-anton text-[40px] z-50 pointer-events-none">
            NUESTROS SERVICIOS
          </h2>
          <div
            ref={innerRef}
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ width: `${slides.length * 100}vw` }}
          >
            {slides.map((Slide, idx) => (
              <div key={idx} className="w-screen h-full shrink-0">
                {Slide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
