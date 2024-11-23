"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/assets/logo-dark.webp";
import { Link, usePathname } from "../i18n/routing";
import { ModeToggle } from "./ModeToggle";
import { Boxes, CircleUser, Cpu, House, LayoutGrid, Send } from "lucide-react";
import LangToggle from "./LangToggle";
import { useTranslations } from "next-intl";

type Props = {};

const Header: FC<Props> = () => {
  const tHeader = useTranslations("HomePage.Header");
  const [active, setActive] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10);

      if (window.innerWidth < 1024) {
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10;
        setIsBottom(isAtBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksData = [
    {
      url: "/",
      text: `${tHeader("home")}`,
      icon: <House size={20} />,
    },
    {
      url: "/work",
      text: `${tHeader("work")}`,
      icon: <LayoutGrid size={20} />,
    },
    {
      url: "/about",
      text: `${tHeader("about")}`,
      icon: <CircleUser size={20} />,
    },
    {
      url: "/technology",
      text: `${tHeader("tech")}`,
      icon: <Cpu size={20} />,
    },
    {
      url: "/services",
      text: `${tHeader("services")}`,
      icon: <Boxes size={20} />,
    },
    {
      url: "/contact-us",
      text: `${tHeader("contact")}`,
      icon: <Send size={20} />,
    },
  ];

  return (
    <>
      <header className={`my-3 md:mx-12 `} aria-label="Main Navigation">
        <div className="px-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <Link
                aria-current="page"
                aria-label="Go to Homepage"
                className="flex items-center gap-2"
                href="/"
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className=" h-12 w-12 rounded-full "
                  priority
                />
                <p
                  className={`flex tracking-tighter !font-sans dark:text-white font-bold text-[20px] sm:text-[25px] bg-gradient-to-r from-slate-900 to-neutral-900 bg-clip-text text-transparent`}
                >
                  Snap Dev
                </p>
              </Link>
            </div>

            <div className="flex items-center   justify-center">
              <div
                className={`flex top-[90%] border border-border rounded-2xl lg:!top-3 items-center justify-center gap-2 fixed inset-x-0 z-50 mx-auto w-fit max-w-full px-2 transition-all duration-300 ${
                  active &&
                  "border border-border shadow rounded-2xl lg:!top-2 top-[88%]"
                } bg-white/80 dark:!bg-[#09090b82] py-1 backdrop-blur-lg px-1  ${
                  isBottom ? "opacity-50" : "opacity-100"
                }`}
              >
                {linksData.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={link.url}
                    className={`${
                      path === link.url
                        ? "bg-accent dark:bg-white  !text-black shadow  dark:hover:text-black"
                        : "hover:bg-gray-100 dark:hover:bg-accent dark:hover:bg-white transition-all dark:hover:text-black "
                    } , flex gap-3 items-center rounded-xl lg:px-2 lg:py-2 px-3 py-2 text-sm font-medium  text-gray-900 dark:text-gray-100 dark:hover:text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                    aria-label={`${link.text} - Link`}
                  >
                    {link.icon}
                    <span className="hidden 1100px:!flex">{link.text}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mx-1 gap-2">
              <LangToggle />
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
