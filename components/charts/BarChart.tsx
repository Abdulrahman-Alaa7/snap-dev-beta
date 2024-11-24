"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { useLocale, useTranslations } from "next-intl";

export function BarChartAnalytics() {
  const lang = useLocale();
  const tAnalytics = useTranslations("AnalyticsPage");
  const t = useTranslations("HomePage.WhyUs.analytics");

  const chartData = [
    { month: `${t("jan")}`, desktop: 186, mobile: 80 },
    { month: `${t("feb")}`, desktop: 305, mobile: 200 },
    { month: `${t("mar")}`, desktop: 237, mobile: 120 },
    { month: `${t("apr")}`, desktop: 73, mobile: 190 },
    { month: `${t("may")}`, desktop: 209, mobile: 130 },
    { month: `${t("jun")}`, desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: `${t("desktop")}`,
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: `${t("mobile")}`,
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="!p-0">
      <CardHeader>
        <CardTitle>{tAnalytics("analytics")}</CardTitle>
        <CardDescription>
          {t("jan")} - {t("jun")} {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={
                lang === "ar"
                  ? (value) => value.slice(0, 6)
                  : (value) => value.slice(0, 3)
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
