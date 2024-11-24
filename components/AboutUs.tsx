import React from "react";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { Eye } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import AbouUs from "../public/assets/Goal.webp";

const About = () => {
  const lang = useLocale();
  const t = useTranslations("AboutPage");

  return (
    <div className="px-2 sm:px-8 lg:px-6 mb-16">
      <div className="mx-auto flex justify-center items-center gap-8 flex-col w-full lg:w-[80%]">
        <div className="flex justify-center items-center mx-auto mt-3">
          <Image
            src={AbouUs}
            alt={t("aboutImageAlt")}
            className="border rounded-full p-2"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-base bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50  font-semibold uppercase">
            {t("whoWeAre")}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text ">
            {t("headline")}
          </h1>
          <p className="text-gray-600 mt-2 dark:text-[#939db6] !leading-7">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className=" bg-indigo-100 dark:bg-[#ffffff05] p-3 rounded-full border border-border">
                <GoGoal size={30} />
              </div>
              <div className={`${lang === "ar" ? "mr-4" : "ml-4"}`}>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50">
                  {t("missionTitle")}
                </h2>
                <p className="text-gray-600 dark:text-[#939db6] text-sm md:text-base !leading-7">
                  {t("missionDescription")}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" bg-indigo-100 dark:bg-[#ffffff05] p-3 rounded-full border border-border">
                <Eye size={30} />
              </div>
              <div className={`${lang === "ar" ? "mr-4" : "ml-4"}`}>
                <h2 className="text-lg font-semibold bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50">
                  {t("visionTitle")}
                </h2>
                <p className="text-gray-600 dark:text-[#939db6] text-sm md:text-base !leading-7">
                  {t("visionDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
