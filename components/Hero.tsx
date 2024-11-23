import React from "react";
import Image from "next/image";
import Robot from "../public/assets/robot2.webp";
import Landing from "../public/assets/img-3.webp";
import { Building } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const NightSky = () => {
  const tHero = useTranslations("HomePage.Hero");
  const lang = useLocale();
  return (
    <div className="relative w-full  h-[85vh] md:h-[90vh] xl:h-[85vh] bg-black dark:bg-background  rounded-3xl overflow-hidden flex flex-col items-center justify-end">
      <div className="absolute top-0 left-0 w-full h-full landing-animation" />
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/20 md:bg-black/40 xl:bg-black/20 z-30"></div>
      <div
        className={` z-30 absolute top-20 py-4 lg:py-0 md:top-1/2 md:transform md:-translate-y-1/2  ${
          lang === "ar" ? "xl:left-16  !text-right" : "left-0  "
        }  transform -translate-y-1/2 p-4 lg:px-4 `}
      >
        <h1 className="text-gray-100  text-2xl 500px:text-3xl sm:text-5xl  lg:text-6xl 2xl:7xl my-6 md:mb-10">
          {tHero("title")}
        </h1>
        <p className="  text-gray-100 text-base 500px:text-xl sm:text-3xl  lg:text-3xl xl:text-4xl  flex flex-wrap items-center gap-2">
          {tHero("desc.p1")}
          <span className="text-[#f31199] flex items-center gap-2 transition-all underline underline-offset-8">
            <Building
              size={24}
              className="w-[20px] h-[20px] xl:w-[35px] xl:h-[35px]"
            />
            {tHero("desc.p2")}
          </span>{" "}
          {tHero("desc.p3")}
        </p>
      </div>
      <div
        className={`absolute bottom-24 md:bottom-32 lg:bottom-24 right-4 500px:right-24 sm:right-20 md:right-32 lg:right-8 w-[400px] 500px:w-[500px] md:w-[500px] lg:w-[580px]  xl:w-[500px] 2xl:w-[650px] landing-img z-20 `}
      >
        <Image src={Landing} alt="space" priority />
      </div>
      <div
        className={`absolute bottom-12 xl:bottom-0 -right-4 w-[400px] 500px:w-[580px] md:w-[700px] lg:w-[580px]   2xl:w-[700px] `}
      >
        <Image src={Robot} alt="robot" priority />
      </div>
    </div>
  );
};

export default NightSky;
