"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Link } from "../i18n/routing";
import { MousePointer2 } from "lucide-react";
import FullStackMain from "../public/assets/full-stack.webp";
import SocialMedia from "../public/assets/social-media.webp";
import Shopify from "../public/assets/shopify.webp";
import Wordpress from "../public/assets/wordpress.webp";
import techSupport from "../public/assets/tech-support.webp";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

const FullServices = (props: Props) => {
  const lang = useLocale();
  const tServices = useTranslations("HomePage.FullServices");
  const carouselItemsHomeServices = [
    { text: "Ecommerce", colors: "from-green-500 to-emerald-600" },
    { text: "AI", colors: "from-sky-600 to-sky-500" },
    { text: "Portfolio", colors: "from-red-500 to-pink-600" },
    { text: "Blog", colors: "from-amber-600 to-yellow-600" },
    { text: "SaaS", colors: "from-rose-500 to-pink-500" },
    { text: "Realtime Apps", colors: "from-teal-400 to-cyan-500" },
    { text: "Documentation", colors: "from-violet-600 to-blue-500" },
  ];

  const imagesHomeServices = [
    {
      src: FullStackMain,
      alt: "Full Stack App",
      title: `${tServices("fullStack")}`,
    },
    {
      src: SocialMedia,
      alt: "Social media growth and engagement",
      title: `${tServices("SocialMedia")}`,
    },
    { src: Shopify, alt: "Shopify", title: `${tServices("shopify")}` },
    { src: Wordpress, alt: "Wordpress", title: `${tServices("wordpress")}` },
    {
      src: techSupport,
      alt: "Tech Support",
      title: `${tServices("techSupport")}`,
    },
  ];
  return (
    <section>
      <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-3 mt-8">
        {tServices("title")} <span className="font-sans">Snap Dev</span>.
      </h2>
      <p className="text-center font-[400] text-gray-700 leading-loose text-sm sm:text-[18px] px-2 dark:text-[#939db6] mb-4">
        {tServices("desc")}
      </p>

      <div className="mx-auto w-[50%] sm:w-[40] md:w-[30%] px-6 text-center mb-3">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          dir="ltr"
        >
          <CarouselContent>
            {carouselItemsHomeServices.map((item, index) => (
              <CarouselItem key={index}>
                <Badge
                  variant="outline"
                  className={`rounded-full text-base bg-gradient-to-r ${item.colors} bg-clip-text text-transparent`}
                >
                  {item.text}
                </Badge>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                src={imagesHomeServices[0].src}
                alt={imagesHomeServices[0].alt}
                fill
                className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h3
                className={`z-10 text-2xl font-medium text-white absolute top-0 ${
                  lang === "ar" ? "right-0" : "left-0"
                } p-4 xs:text-xl md:text-3xl`}
              >
                {imagesHomeServices[0].title}
              </h3>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <Image
                src={imagesHomeServices[1].src}
                alt={imagesHomeServices[1].alt}
                fill
                className="absolute object-cover inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h3
                className={`z-10 text-2xl font-medium text-white absolute top-0 ${
                  lang === "ar" ? "right-0" : "left-0"
                } p-4 xs:text-xl md:text-3xl`}
              >
                {imagesHomeServices[1].title}
              </h3>
            </div>

            <div className="grid gap-4 grid-cols-2">
              {[2, 3].map((index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src={imagesHomeServices[index].src}
                    alt={imagesHomeServices[index].alt}
                    fill
                    className="absolute object-cover inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <h3
                    className={`z-10 text-2xl font-medium text-white absolute top-0 ${
                      lang === "ar" ? "right-0" : "left-0"
                    } p-4 xs:text-xl md:text-3xl`}
                  >
                    {imagesHomeServices[index].title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 h-auto lg:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                src={imagesHomeServices[4].src}
                alt={imagesHomeServices[4].alt}
                fill
                className="absolute object-cover inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h3
                className={`z-10 text-2xl font-medium text-white absolute top-0 ${
                  lang === "ar" ? "right-0" : "left-0"
                } p-4 xs:text-xl md:text-3xl`}
              >
                {imagesHomeServices[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/services`}
        className="justify-center items-center mx-auto mt-6 hover:opacity-85 transition-all rounded-full w-fit xl:mx-auto relative flex h-12 my-6 overflow-hidden p-[1px] focus:outline-none"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
            px-7 text-sm font-medium backdrop-blur-3xl gap-2 bg-slate-900 text-white dark:text-slate-950 dark:bg-[#fff]`}
        >
          {tServices("linkTech")}
          <MousePointer2 size={18} className="rotate-90" />
        </span>
      </Link>
    </section>
  );
};

export default FullServices;
