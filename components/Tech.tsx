import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo-dark.webp";
import NextJs from "../public/assets/nextjs.svg";
import ReactJs from "../public/assets/react.svg";
import NestJs from "../public/assets/nestJs.svg";
import Graphql from "../public/assets/graphql.svg";
import NodeJs from "../public/assets/nodeJs.svg";
import aws from "../public/assets/aws.svg";
import mongoDb from "../public/assets/mongoDb.svg";
import { Link } from "../i18n/routing";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

const Tech = (props: Props) => {
  const lang = useLocale();
  const t = useTranslations("TechPage");
  return (
    <div>
      <div className="relative h-full w-full flex items-center justify-center my-10">
        <div className=" relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          <div className=" left-[45px] -top-[4px] absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white  p-1">
              <Image
                src={ReactJs}
                alt="React"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" right-[45px] -top-[4px] absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white ed p-1">
              <Image
                src={NestJs}
                alt="NestJs"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" -left-4 top-20 absolute rounded-full bg-cover r border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white   p-1">
              <Image
                src={NextJs}
                alt="NextJs"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" -right-4 top-20 absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white  p-1">
              <Image
                src={Graphql}
                alt="Graphql"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" bottom-8 -left-0 absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white ] p-1">
              <Image
                src={NodeJs}
                alt="NodeJs"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" bottom-8 -right-0 absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white  p-1">
              <Image
                src={mongoDb}
                alt="MongoDb"
                width={50}
                height={50}
                loading="lazy"
              />
            </span>
          </div>
          <div className=" right-[40%] -bottom-4 absolute rounded-full bg-cover  border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white  p-1">
              <Image
                src={aws}
                alt="AWS"
                width={50}
                height={50}
                className="rounded-full"
                loading="lazy"
              />
            </span>
          </div>
          <div className=" w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50  transition-all duration-500 z-0">
            <div className="w-full bg-white dark:bg-[#ffffff05] h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <span className="w-20 h-20 inline-block">
                <Image
                  src={Logo}
                  alt="Snap_Dev"
                  width={150}
                  height={150}
                  className="rounded-full"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-6  w-full lg:w-[80%]  mx-auto">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          {t("header")}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{t("intro")}</p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {t("modernTechnologiesTitle")}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("modernTechnologiesContent")}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("frontendExcellenceTitle")}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("frontendExcellenceContent")}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("backendStrengthTitle")}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("backendStrengthContent")}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("integrationsTitle")}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("integrationsContent")}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("aiCloudTitle")}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("aiCloudContent")}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("whyChooseUsTitle")}
        </h3>
        <ul
          className={`my-6 ${
            lang === "ar" ? "mr-6" : "ml-6"
          } list-disc [&>li]:mt-3`}
        >
          {t
            .raw("whyChooseUsList")
            .map(
              (
                whyChooseUs: { title: string; detail: string },
                index: number
              ) => (
                <li key={index}>
                  <b>{whyChooseUs.title}</b> {whyChooseUs.detail}
                </li>
              )
            )}
        </ul>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {t("joinUsTitle")}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {t("joinUsContent")}
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <b> {t("letsShape")}</b>{" "}
          <Link
            href={`/contact-us`}
            className="underline underline-offset-4 text-sky-700"
          >
            {t("contactUs")}
          </Link>{" "}
          {t("lastP")}
        </p>
      </div>
    </div>
  );
};

export default Tech;
