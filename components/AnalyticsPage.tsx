import React from "react";
import { BarChartAnalytics } from "./charts/BarChart";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

const AnalyticsPage = (props: Props) => {
  const t = useTranslations("AnalyticsPage");
  const lang = useLocale();
  return (
    <div>
      <div className="p-1 md:p-6 w-full md:w-[50%] mx-auto">
        <BarChartAnalytics />
      </div>
      <div>
        <div className={` p-2 md:p-6 lg:p-10 w-full lg:w-[80%]  mb-6`}>
          <h1 className="mb-6 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            {t("MainTitle")}
          </h1>

          <h2 className="mb-6 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            {t("SecTitle")}
          </h2>

          <p className="leading-7 [&:not(:first-child)]:mt-2 mb-3">
            {t("desc1")}
          </p>

          <p className="font-bold">{t("KeyFeaturesTitle")}</p>
          <ul
            className={`my-6 ${
              lang === "ar" ? "mr-6" : "ml-6"
            } list-disc [&>li]:mt-3`}
          >
            {t
              .raw("KeyFeatures")
              .map(
                (feature: { title: string; detail: string }, index: number) => (
                  <li key={index}>
                    <b>{feature.title}</b> {feature.detail}
                  </li>
                )
              )}
          </ul>

          <p className="font-bold">{t("BenefitsTitle")}</p>
          <ul
            className={`my-6 ${
              lang === "ar" ? "mr-6" : "ml-6"
            } list-disc [&>li]:mt-3`}
          >
            {t
              .raw("Benefits")
              .map(
                (benefit: { title: string; detail: string }, index: number) => (
                  <li key={index}>
                    <b>{benefit.title}</b> {benefit.detail}
                  </li>
                )
              )}
          </ul>

          <p className="font-bold">{t("CapabilitiesTitle")}</p>
          <ul
            className={`my-6 ${
              lang === "ar" ? "mr-6" : "ml-6"
            } list-disc [&>li]:mt-3`}
          >
            {t.raw("Capabilities").map((capability: string, index: number) => (
              <li key={index}>{capability}</li>
            ))}
          </ul>

          <p className="font-bold">{t("Conclusion")}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
