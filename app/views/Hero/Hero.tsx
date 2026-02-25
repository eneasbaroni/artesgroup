"use client";

import { useSmoothScroll } from "@/app/hooks/useSmoothScroll/useSmoothScroll";

const Hero = () => {
  useSmoothScroll();
  return (
    <div
      id="home"
      className="w-full h-[100dvh] relative flex items-center justify-center"
    >
      <img
        src="/images/hero-img.png"
        alt="hero"
        className="absolute w-full h-full object-cover -z-10"
      />
      <div className="w-full p-10">
        <h1 className="m-auto mt-10 w-auto max-w-130 p-10 mobile:p-5 font-anton text-7xl tablet:text-6xl mobile:text-4xl leading-24 tablet:leading-20 mobile:leading-14 text-center dark-glass rounded-4xl border border-white/10">
          TU ESCENARIO
          <br /> NUESTRA MISIÓN
        </h1>
      </div>
    </div>
  );
};
export default Hero;
