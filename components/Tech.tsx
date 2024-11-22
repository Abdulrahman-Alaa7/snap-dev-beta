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

type Props = {};

const Tech = (props: Props) => {
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
          Empowering Innovation with Cutting-Edge Technology at Snap Dev
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At <b>Snap Dev</b>, innovation lies at the heart of everything we do.
          As a full-service digital agency, we are committed to delivering
          exceptional web and mobile solutions that not only meet but exceed the
          evolving demands of today&#39;s digital landscape. Our expertise spans
          across a wide range of services, including website development, custom
          applications, social media growth strategies, advertising campaigns,
          and technical support.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Leveraging the Power of Modern Technologies
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In our journey to build impactful digital solutions, we embrace the
          latest and most advanced technologies. Our development stack includes
          industry-leading tools and frameworks that are designed to provide
          seamless user experiences, exceptional performance, and unmatched
          scalability.{" "}
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Frontend Excellence: React.js & Next.js
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We harness the power of <b>React.js</b>, one of the most popular and
          robust JavaScript libraries, to create dynamic and interactive user
          interfaces. Coupled with <b>Next.js</b>, a cutting-edge framework for
          server-rendered applications, we ensure our projects are fast,
          SEO-friendly, and built for modern web standards.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Backend Strength: Node.js, MongoDB & Beyond
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For backend development, we utilize <b>Node.js</b>, which allows us to
          deliver scalable and high-performance applications. By integrating
          <b> MongoDB</b> for efficient and flexible database management, we
          ensure that your project is backed by a reliable infrastructure.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Seamless Integrations: Shopify, WordPress & Custom APIs
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Whether you&#39;re an eCommerce business seeking tailored solutions
          through <b>Shopify</b> or a content-driven website relying on{" "}
          <b>WordPress</b>, our team is adept at optimizing and extending these
          platforms. We also specialize in creating custom APIs, ensuring
          seamless integration between your systems.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Staying Ahead with AI and Cloud Solutions
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In addition to web and app development, Snap Dev is always exploring
          advanced technologies like <b>Artificial Intelligence (AI) </b>and
          <b> cloud-based solutions</b> to drive innovation. From implementing
          AI-driven features to ensuring robust cloud hosting environments, we
          are equipped to bring your vision to life.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Why Choose Snap Dev?
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <b>Future-Proof Solutions:</b> By adopting modern frameworks and
            tools, we ensure your website or application remains relevant and
            efficient for years to come.
          </li>
          <li>
            <b>Customization at Scale:</b> Every project we undertake is
            tailor-made to align perfectly with your unique business goals.
          </li>
          <li>
            <b>Seamless Collaboration:</b> Our process involves close
            collaboration with clients, ensuring transparency, timely delivery,
            and exceptional results.
          </li>
        </ul>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Join Us on the Path to Digital Excellence
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Snap Dev, we don&#39;t just build websites or applications—we
          create experiences. With our focus on leveraging the latest
          technologies and maintaining a client-first approach, we empower
          businesses to succeed in an increasingly competitive digital world.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <b>Let&#39;s shape the future together.</b>{" "}
          <Link
            href={`/contact-us`}
            className="underline underline-offset-4 text-sky-700"
          >
            Contact Snap Dev
          </Link>{" "}
          today and discover how our technological expertise can elevate your
          business.
        </p>
      </div>
    </div>
  );
};

export default Tech;
