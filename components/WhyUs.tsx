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

type Props = {};

const features = [
  {
    icon: (
      <IoIosCloudOutline
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white  from-emerald-400 via-green-500 to-lime-500"
      />
    ),
    title: "Domain & Hosting",
    description: "Reliable hosting, top-tier domains. Your website, protected.",
  },
  {
    icon: (
      <Sparkles
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-green-400 via-cyan-500 to-blue-700"
      />
    ),
    title: "AI-Powered",
    description:
      "AI-powered growth for your business. Future-proof your business with AI.",
  },
  {
    icon: (
      <Layers3
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-violet-400 via-pink-500 to-pink-400"
      />
    ),
    title: "Modern & Professional Design",
    description:
      "Creating stunning, modern websites that leave a lasting impression.",
  },
  {
    icon: (
      <Lock
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-rose-500 via-amber-600 to-orange-600"
      />
    ),
    title: "Secure Your Business",
    description: "Your data is safe with our advanced security measures.",
  },
  {
    icon: (
      <Rocket
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-rose-500 via-red-500 to-pink-700"
      />
    ),
    title: "High-Performance",
    description:
      "Experience unparalleled speed and efficiency with our expertly crafted websites.",
  },
  {
    icon: (
      <CircleCheckBig
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-teal-500 via-teal-700 to-green-800"
      />
    ),
    title: "Built to Perfection",
    description:
      "Our websites are meticulously designed and developed following industry best practices.",
  },
  {
    icon: (
      <Accessibility
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-yellow-500 via-amber-500 to-yellow-800"
      />
    ),
    title: "Accessible to All",
    description:
      "Our websites are inclusive and accessible to all, regardless of abilities.",
  },
  {
    icon: (
      <SearchCheck
        size={75}
        className="bg-gradient-to-r rounded-3xl p-3 text-white from-sky-500 via-cyan-500 to-sky-900"
      />
    ),
    title: "SEO Optimized",
    description:
      "Our SEO-optimized websites will help you rank higher in search engine results.",
  },
];

const WhyUs = (props: Props) => {
  return (
    <section className="py-12 px-1">
      <h2 className="gradient-text scroll-m-20 text-xl md:text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-12">
        Your vision, our technology. Web and app development, tailored to you
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
      <Card className="mt-6 flex flex-col md:flex-row justify-center items-center gap-2 hover:border-[#444]  bg-slate-900 transition-all rounded-3xl  md:p-3 p-0">
        <div className="w-full md:w-1/2 ">
          <CardHeader>
            <ChartNoAxesCombined
              size={90}
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-400 rounded-3xl p-3 text-white"
            />
          </CardHeader>
          <CardContent>
            <h3 className="text-white/90 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
              In-depth Analytics and Insights
            </h3>
            <h3 className="text-white/90 scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">
              Uncover valuable data to drive your business forward.
            </h3>
            <p className="w-full leading-7 [&:not(:first-child)]:mt-2 text-[#939db6]">
              Our comprehensive analytics suite provides you with deep insights
              into the performance of your applications. Gain a clear
              understanding of your users&#39;behavior, track key metrics, and
              make data-driven decisions to optimize your products.{" "}
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
                More details
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
