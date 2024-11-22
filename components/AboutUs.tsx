import React from "react";
import Image from "next/image";
import AbouUs from "../public/assets/Goal.webp";
import { GoGoal } from "react-icons/go";
import { Eye } from "lucide-react";

const About = () => {
  return (
    <div className="px-2 sm:px-8 lg:px-6 mb-16">
      <div className="mx-auto flex justify-center items-center gap-8 flex-col w-full lg:w-[80%]">
        <div className="flex justify-center items-center mx-auto mt-3">
          <Image
            src={AbouUs}
            alt="About_Snap_Dev"
            className="border rounded-full p-2"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent  dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50  text-sm font-semibold uppercase">
            Who We Are
          </span>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mt-2">
            Behind the Code : Snap Dev
          </h1>
          <p className="text-gray-600 mt-4 dark:text-[#939db6] !leading-7 ">
            At <b>Snap Dev,</b> we specialize in crafting digital solutions
            tailored to meet the unique needs of businesses. From stunning
            websites and intuitive mobile apps to strategic marketing plans and
            customizable templates, we provide everything you need to build a
            strong digital presence. Our team is dedicated to delivering
            innovative Shopify and WordPress solutions, along with reliable tech
            support to keep your business running smoothly.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className=" bg-indigo-100 dark:bg-[#ffffff05] p-3 rounded-full border border-border">
                <GoGoal size={30} />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent  dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50 ">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-[#939db6] text-sm md:text-base !leading-7">
                  To deliver user-focused, creative, and reliable solutions that
                  help businesses thrive in a competitive digital world.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" bg-indigo-100 dark:bg-[#ffffff05] p-3 rounded-full border border-border ">
                <Eye size={30} />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-zinc-800 via-slate-800 to-zinc-700 bg-clip-text text-transparent  dark:from-slate-50 dark:via-gray-50 dark:to-zinc-50 ">
                  Our Vision
                </h2>
                <p className="text-gray-600 dark:text-[#939db6] text-sm md:text-base !leading-7">
                  To empower businesses with innovative digital solutions that
                  drive growth and success.
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
