import React from "react";
import Image from "next/image";
import { Link } from "../i18n/routing";
import { MousePointer2 } from "lucide-react";
import ogsClient from "../public/assets/ogs-games-user.webp";
import portfolioApp from "../public/assets/portfolio-app.webp";
import ogsDashboard from "../public/assets/ogs-dashboard.webp";
import { useLocale, useTranslations } from "next-intl";
type Props = {};

const imagesSomeWork = [
  {
    className: `absolute top-0 left-1/2 transform -translate-x-[60%] sm:-translate-x-[100%] p-1 w-[280px] lg:w-[320px] h-[155px] lg:h-[175px] bg-background border border-sky-500 rounded-lg shadow-lg transition-all hover:scale-105 hover:translate-y-[-10px]`,
    src: ogsDashboard,
    alt: "OGs Dashboard",
  },
  {
    className: `absolute top-12 left-1/2 transform -translate-x-[50%] p-1 w-[280px] lg:w-[320px] h-[155px] lg:h-[175px] bg-background border border-sky-500 rounded-lg shadow-lg transition-all hover:scale-105 hover:translate-y-[-10px] z-10`,
    src: portfolioApp,
    alt: "Protfolio app",
  },
  {
    className: `absolute top-32 left-1/2 transform -translate-x-[40%] sm:-translate-x-[20%] p-1 w-[280px] lg:w-[320px] h-[155px] lg:h-[175px] bg-background border border-sky-500 rounded-lg shadow-lg transition-all hover:scale-105 hover:translate-y-[-10px] z-20`,
    src: ogsClient,
    alt: "OGs Client app",
  },
];

const SomeWork = (props: Props) => {
  const lang = useLocale();
  const tSomeWork = useTranslations("HomePage.SomeWork");
  return (
    <section className="overflow-hidden py-6 px-4 md:px-8 bg-gray-100 dark:bg-[#ffffff05]">
      <h2 className="gradient-text text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-6">
        {tSomeWork("title")}
      </h2>
      <div className="flex flex-col-reverse xl:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 text-center lg:text-left p-4 lg:p-8">
          <h3
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              lang === "ar" && "text-center md:text-right"
            }  text-gray-800 dark:text-gray-100`}
          >
            {tSomeWork("h1")}
          </h3>
          <p
            className={`text-gray-700 dark:text-gray-400 ${
              lang === "ar" && "text-center md:text-right !leading-7"
            } `}
          >
            {tSomeWork("p1")}
          </p>
          <Link
            href={`/work`}
            className="justify-center items-center mx-auto  mt-6 hover:opacity-85 transition-all rounded-full  w-fit  lg:mx-0 relative flex h-12 my-6 overflow-hidden p-[1px] focus:outline-none  "
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
              px-7 text-sm font-medium  backdrop-blur-3xl gap-2 bg-slate-900 text-white dark:text-slate-950 dark:bg-[#fff]`}
            >
              {tSomeWork("linkWork")}
              <MousePointer2 size={18} className=" rotate-90" />
            </span>
          </Link>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center h-[320px]">
          {imagesSomeWork.map((image: any, index: number) => (
            <div key={index} className={image.className}>
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-lg"
                width={320}
                height={240}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeWork;
