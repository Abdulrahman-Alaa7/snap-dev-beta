import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Logo from "../public/assets/logo-dark.webp";

type Props = {};

const OurWork = (props: Props) => {
  const t = useTranslations("OurWork");
  return (
    <>
      <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-6 mt-6">
        {t("title")}
      </h2>
      <main
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      2xl:grid-cols-4 gap-4 my-6 transition-all mx-2 md:mx-3"
      >
        {t.raw("projects").map((project: any) => (
          <div
            key={project.id}
            className="p-2 rounded-3xl border border-border hover:border-[#ccc] dark:hover:border-[#444] hover:bg-[#ffffff05] transition-all overflow-hidden shadow-lg bg-grey-light w-full sm:w-1/3-g"
          >
            <div className="relative">
              <Image
                priority={false}
                width={500}
                height={250}
                src={project.img}
                alt={`Image of ${project.title}`}
                aria-label={`Image of ${project.title}`}
                className="object-cover w-full h-48 rounded-3xl"
              />
              <span className="bg-gray-100 p-2 absolute bottom-2 left-2 rounded-full flex justify-center items-center">
                <Image
                  priority={false}
                  width={30}
                  height={30}
                  src={Logo}
                  alt="Image of Snap Dev"
                  aria-label="Image of Snap Dev"
                  className="rounded-full"
                />
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm mt-2 min-h-50 text-gray-700 dark:text-[#939db6]">
                {project.des}
              </p>
              <div className="flex flex-row mt-4 justify-between">
                <div className="flex items-center opacity-80 text-gray-700 dark:text-[#939db6] gap-1 text-[18px]">
                  {t("by")}{" "}
                  <Image
                    src={Logo}
                    alt="logo_Snap_Dev"
                    width={30}
                    height={30}
                    className="rounded-full opacity-80 dark:border dark:border-border"
                  />
                  Snap Dev
                </div>
                <a
                  href={project.link}
                  className="flex items-center gap-2 border border-border rounded-full px-4 py-1 transition-all hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  <span>{t("liveSite")}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default OurWork;
