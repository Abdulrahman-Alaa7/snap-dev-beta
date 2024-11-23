"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Link as LinkNav } from "../i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LogoFooter from "../public/assets/logo-dark.webp";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const tHeader = useTranslations("HomePage.Header");
  const tFooter = useTranslations("HomePage.Footer");
  const lang = useLocale();

  const socialLinks = [
    {
      href: "https://www.facebook.com",
      imgSrc: <FaFacebook size={25} />,
      alt: "Facebook Logo",
      tooltipText: `${tFooter("tooltipFacebook")}`,
    },
    {
      href: "https://www.instagram.com",
      imgSrc: <FaInstagram size={25} />,
      alt: "Instagram logo",
      tooltipText: `${tFooter("tooltipInstagram")}`,
    },
    {
      href: "https://www.tiktok.com",
      imgSrc: <FaTiktok size={25} />,
      alt: "tiktok Logo",
      tooltipText: `${tFooter("tooltipTiktok")}`,
    },
    {
      href: "https://www.linkedin.com/",
      imgSrc: <FaLinkedin size={25} />,
      alt: "LinkedIn Logo",
      tooltipText: `${tFooter("tooltipLinkedIn")}`,
    },
  ];

  return (
    <footer className="text-center bg-background mt-2" aria-label="Footer">
      <Separator />

      <div
        className={`mx-6 my-3 py-4 text-center ${
          lang == "ar" ? "md:!text-right" : "md:text-left"
        } `}
      >
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className=" flex flex-col gap-6  ">
            <LinkNav
              href={`/`}
              className="w-fit mb-4 flex items-center justify-center mx-auto sm:mx-0 font-semibold md:justify-start  gap-2"
            >
              <Image
                src={LogoFooter}
                alt="Logo_Footer"
                width={45}
                height={45}
                className=" rounded-full"
              />
              <p className="font-sans tracking-wide mt-1 dark:text-white font-semibold text-[22px] sm:text-[25px] bg-gradient-to-r from-slate-900 to-neutral-900 bg-clip-text text-transparent">
                Snap Dev
              </p>
            </LinkNav>
            <div className="flex items-center  mx-auto md:mx-0 md:gap-3 gap-6">
              <TooltipProvider>
                {socialLinks.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild className="">
                      <Link
                        href={link.href}
                        className="transition-all hover:opacity-80 w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        target="_blank"
                        aria-label={`Follow us on ${link.alt.split(" ")[0]}`}
                      >
                        {link.imgSrc}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-black text-white border-[#292524] mb-2"
                      side="top"
                    >
                      <p>{link.tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div>
            <h2 className="mb-4 flex justify-center font-semibold md:justify-start text-[20px]">
              {tFooter("quickLinks")}
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", text: `${tHeader("home")}` },
                { href: "/work", text: `${tHeader("work")}` },
                { href: "/about", text: `${tHeader("about")}` },
                { href: "/technology", text: `${tHeader("tech")}` },
                { href: "/services", text: `${tHeader("services")}` },
                { href: "/contact-us", text: `${tHeader("contact")}` },
              ].map((link, index) => (
                <LinkNav
                  key={index}
                  href={link.href}
                  className="w-fit mx-auto md:mx-0 hover:underline hover:underline-offset-4 text-[#666] leading-loose text-[14px] dark:text-[#939db6] hover:text-primary dark:hover:text-primary transition-all duration-300"
                >
                  {link.text}
                </LinkNav>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1">
            <h2 className="text-left mb-4 flex justify-center font-semibold md:justify-start text-[20px]">
              {tFooter("contactFooter")}
            </h2>

            <p
              dir="ltr"
              className="text-left mb-4 flex items-center justify-center md:justify-start gap-2 text-[#666] leading-loose text-[14px] dark:text-[#939db6]"
            >
              <MapPin />
              {tFooter("location")}
            </p>

            <Link
              dir="ltr"
              href={`mailto:support@snapdev.com`}
              className="text-left  md:mx-0 mb-4 flex items-center justify-center md:justify-start gap-2 text-[#666] leading-loose text-[14px] dark:text-[#939db6] hover:!text-primary dark:hover:text-primary !transition-all !duration-300"
            >
              <Mail />
              support@snapdev.com{" "}
            </Link>
            <Link
              dir="ltr"
              href={`tel:+201098198827`}
              className="text-left md:mx-0 mb-4 flex items-center justify-center md:justify-start gap-2 text-[#666] leading-loose text-[14px] dark:text-[#939db6] hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              <Phone /> <span>+20 109 873 3157</span>
            </Link>
          </div>
        </div>
      </div>

      <Separator />
      <div
        className={`bg-background p-6 text-center flex justify-center items-center gap-1 `}
      >
        <div className={`flex justify-center items-center  gap-1`}>
          &copy; <span>{new Date().getFullYear()}</span>
        </div>

        <span>
          {tFooter("lastPFooter")}
          <span className="font-extrabold font-sans"> Snap Dev</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
