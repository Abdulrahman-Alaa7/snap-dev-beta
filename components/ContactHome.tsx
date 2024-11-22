import React from "react";
import { BackgroundGradientAnimation } from "./ui/gradientbg";
import { SendHorizonal } from "lucide-react";
import { Link } from "../i18n/routing";

type Props = {};

const ContactHome = (props: Props) => {
  return (
    <section className="relative w-full  lg:w-[75%] mx-auto h-80   py-20 my-6">
      <div className="lg:col-span-2 md:col-span-3 md:row-span-1   ">
        <BackgroundGradientAnimation>
          <div className="absolute   z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          <div className={`flex justify-center h-full`}>
            <div
              className={`group-hover/bento:translate-x-2  transition duration-200 relative py-3 px-1  justify-center  text-center`}
            >
              <div className="flex flex-col justify-center items-center mx-auto gap-8 mt-6">
                {" "}
                <div className="text-3xl w-full md:w-[95%] mx-auto font-bold  text-neutral-300 z-30">
                  Ready to take your digital presence to the next level?
                </div>
                <div className=" font-extralight w-[95%] mx-auto md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                  Reach out to us today and let&#39;s discuss how we can help
                  you achieve your goals.
                </div>
              </div>
              <div className="mt-0 relative ">
                {/* <div className={`absolute -bottom-5 right-0 block`}></div> */}
                <Link
                  href={`/contact-us`}
                  className="z-40 justify-center items-center mx-auto  mt-6 hover:opacity-85 transition-all rounded-full  w-fit  xl:mx-auto relative flex h-12 my-6 overflow-hidden p-[1px] focus:outline-none  "
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span
                    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
              px-7 text-sm font-medium  backdrop-blur-3xl gap-2 bg-slate-900 text-white `}
                  >
                    Let&#39;s get in touch
                    <SendHorizonal size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </section>
  );
};

export default ContactHome;
