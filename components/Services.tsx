import React from "react";
import Image from "next/image";
import {
  Bug,
  ChevronsLeftRightEllipsis,
  LayoutTemplate,
  NotebookPen,
  TabletSmartphone,
} from "lucide-react";
import { FaShopify, FaWordpress } from "react-icons/fa";
import ServicesImg from "../public/assets/services.webp";
import { useTranslations } from "next-intl";

type Props = {};

const Services = (props: Props) => {
  const t = useTranslations("ServicesPage");

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-2 md:px-6 pb-10 mt-3`}
    >
      <Image
        src={ServicesImg}
        alt={t("bannerAlt")}
        width={400}
        height={400}
        priority
        className="rounded-full md:mx-auto border border-border p-2 mb-3"
      />
      <div className="w-full lg:w-[80%]">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          {t("title")}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{t("intro")}</p>

        {[
          {
            title: t("webApps.title"),
            description: t("webApps.description"),
            icon: <ChevronsLeftRightEllipsis size={25} />,
          },
          {
            title: t("mobileApps.title"),
            description: t("mobileApps.description"),
            icon: <TabletSmartphone size={25} />,
          },
          {
            title: t("marketingPlans.title"),
            description: t("marketingPlans.description"),
            icon: <NotebookPen size={25} />,
          },
          {
            title: t("templates.title"),
            description: t("templates.description"),
            icon: <LayoutTemplate size={25} />,
          },
          {
            title: t("techSupport.title"),
            description: t("techSupport.description"),
            icon: <Bug size={25} />,
          },
          {
            title: t("shopify.title"),
            description: t("shopify.description"),
            icon: <FaShopify size={25} />,
          },
          {
            title: t("wordpress.title"),
            description: t("wordpress.description"),
            icon: <FaWordpress size={25} />,
          },
        ].map((service, index) => (
          <div key={index} className="mt-8">
            <h2 className="flex items-center gap-2 pb-2 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
              <span className="bg-muted rounded-full p-2">{service.icon}</span>
              {service.title}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
