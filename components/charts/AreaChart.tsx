"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { useLocale, useTranslations } from "next-intl";

export function AreaChartAnalytics() {
  const tAnalytics = useTranslations("HomePage.WhyUs.analytics");
  const lang = useLocale();
  const chartData = [
    { month: `${tAnalytics("jan")}`, desktop: 186, mobile: 80 },
    { month: `${tAnalytics("feb")}`, desktop: 305, mobile: 200 },
    { month: `${tAnalytics("mar")}`, desktop: 237, mobile: 120 },
    { month: `${tAnalytics("apr")}`, desktop: 73, mobile: 190 },
    { month: `${tAnalytics("may")}`, desktop: 209, mobile: 130 },
    { month: `${tAnalytics("jun")}`, desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: `${tAnalytics("desktop")}`,
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: `${tAnalytics("mobile")}`,
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <Card className="!p-0 w-full  dark rounded-3xl bg-slate-900 border-0  ">
      <CardContent className="!p-3 ">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={
                lang === "ar"
                  ? (value) => value.slice(0, 6)
                  : (value) => value.slice(0, 3)
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent indicator="dot" className="bg-slate-900" />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" !pt-2 pb-6">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {tAnalytics("desc")} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {tAnalytics("jan")} - {tAnalytics("jun")}{" "}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
