import React from "react";
import Image from "next/image";
import Robot from "../public/assets/robot2.webp";
import Landing from "../public/assets/img-3.webp";
import { Building } from "lucide-react";

const NightSky = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] xl:h-[85vh] bg-black dark:bg-background  rounded-3xl overflow-hidden flex flex-col items-center justify-end">
      <div className="absolute top-0 left-0 w-full h-full landing-animation" />
      <div className=" z-30 absolute top-20 py-4 lg:py-0 lg:top-1/2 left-0 transform -translate-y-1/2 p-4 lg:px-4   ">
        <h1 className="text-white/80  text-2xl 500px:text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-3 2xl:mb-8">
          Snapping Ideas to Reality
        </h1>
        <p className="text-white/80 text-base 500px:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex flex-wrap items-center gap-1">
          Pro tools created with{" "}
          <span className="text-[#f31199] flex items-center gap-1 transition-all underline underline-offset-8">
            <Building
              size={24}
              className="w-[20px] h-[20px] xl:w-[35px] xl:h-[35px]"
            />
            businesses
          </span>{" "}
          in mind
        </p>
      </div>
      <div className="absolute bottom-24 w-[400px] 500px:w-[500px] md:w-[700px] lg:w-[580px]  xl:w-[500px] 2xl:w-[700px] landing-img z-20 right-4 500px:right-24 sm:right-12 ">
        <Image src={Landing} alt="space" priority />
      </div>
      <div className="absolute bottom-12 xl:bottom-0 w-[400px] 500px:w-[580px] md:w-[700px] lg:w-[580px]   2xl:w-[700px]   -right-4">
        <Image src={Robot} alt="robot" priority />
      </div>
    </div>
  );
};

export default NightSky;
