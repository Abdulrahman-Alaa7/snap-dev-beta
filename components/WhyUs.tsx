import React from "react";
import {
  Accessibility,
  CircleCheckBig,
  Layers3,
  Lock,
  Rocket,
  SearchCheck,
  Sparkles,
  ChartNoAxesCombined,
  MousePointer2,
} from "lucide-react";
import { IoIosCloudOutline } from "react-icons/io";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Link } from "../i18n/routing";
import { AreaChartAnalytics } from "./charts/AreaChart";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

const WhyUs = (props: Props) => {
  const lang = useLocale();
  const tWhyUs = useTranslations("HomePage.WhyUs");
  const features = [
    {
      icon: (
        <IoIosCloudOutline
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white  from-emerald-400 via-green-500 to-lime-500"
        />
      ),
      title: `${tWhyUs("h1")}`,
      description: `${tWhyUs("p1")}`,
    },
    {
      icon: (
        <Sparkles
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-green-400 via-cyan-500 to-blue-700"
        />
      ),
      title: `${tWhyUs("h2")}`,
      description: `${tWhyUs("p2")}`,
    },
    {
      icon: (
        <Layers3
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-violet-400 via-pink-500 to-pink-400"
        />
      ),
      title: `${tWhyUs("h3")}`,
      description: `${tWhyUs("p3")}`,
    },
    {
      icon: (
        <Lock
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-rose-500 via-amber-600 to-orange-600"
        />
      ),
      title: `${tWhyUs("h4")}`,
      description: `${tWhyUs("p4")}`,
    },
    {
      icon: (
        <Rocket
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-rose-500 via-red-500 to-pink-700"
        />
      ),
      title: `${tWhyUs("h5")}`,
      description: `${tWhyUs("p5")}`,
    },
    {
      icon: (
        <CircleCheckBig
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-teal-500 via-teal-700 to-green-800"
        />
      ),
      title: `${tWhyUs("h6")}`,
      description: `${tWhyUs("p6")}`,
    },
    {
      icon: (
        <Accessibility
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-yellow-500 via-amber-500 to-yellow-800"
        />
      ),
      title: `${tWhyUs("h7")}`,
      description: `${tWhyUs("p7")}`,
    },
    {
      icon: (
        <SearchCheck
          size={75}
          className="bg-gradient-to-r rounded-3xl p-3 text-white from-sky-500 via-cyan-500 to-sky-900"
        />
      ),
      title: `${tWhyUs("h8")}`,
      description: `${tWhyUs("p8")}`,
    },
  ];

  return (
    <section className="py-6 px-1">
      <h2 className="gradient-text  scroll-m-20 text-xl md:text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-8">
        {tWhyUs("title")}
      </h2>
      <div className="mx-2 lg:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all my-6 md:mx-3">
        {features.map(({ icon, title, description }, index) => (
          <Card
            key={index}
            className="hover:border-[#444] hover:bg-[#ffffff05] transition-all rounded-3xl "
          >
            <CardHeader className="p-4">{icon}</CardHeader>
            <CardContent>
              <h3 className="scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0">
                {title}
              </h3>
              <p className="!leading-7 text-sm sm:text-base [&:not(:first-child)]:mt-2 text-[#444] dark:text-[#939db6]">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card
        className={`mt-6 flex flex-col ${
          lang === "ar" ? "md:flex-row-reverse" : "md:flex-row "
        } justify-center items-center gap-2 hover:border-[#444]  bg-slate-900 transition-all rounded-3xl  md:p-3 p-0`}
      >
        <div className="w-full md:w-1/2 ">
          <CardHeader>
            <ChartNoAxesCombined
              size={90}
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-400 rounded-3xl p-3 text-white"
            />
          </CardHeader>
          <CardContent>
            <h3 className="text-white/90 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
              {tWhyUs("analytics.title")}
            </h3>
            <h3 className="text-white/90 scroll-m-20 pb-2 text-xl font-semibold tracking-tight my-3">
              {tWhyUs("analytics.p1")}
            </h3>
            <p className="w-full leading-7 [&:not(:first-child)]:mt-2 text-[#939db6]">
              {tWhyUs("analytics.p2")}
            </p>
            <Link
              href={`/analytics`}
              className="mt-10 hover:opacity-85 transition-all rounded-full  w-fit mx-0 xl:mx-auto relative inline-flex h-12 md:mt-10 overflow-hidden p-[1px] focus:outline-none  "
              aria-label="analytics page Link"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
             text-slate-950 px-7 text-sm font-medium  backdrop-blur-3xl gap-2 bg-[#fff]`}
              >
                {tWhyUs("analytics.linkAnalytics")}
                <MousePointer2 size={18} className=" rotate-90" />
              </span>
            </Link>
          </CardContent>
        </div>
        <div className=" w-full md:w-1/2">
          <AreaChartAnalytics />
        </div>
      </Card>
    </section>
  );
};

export default WhyUs;
