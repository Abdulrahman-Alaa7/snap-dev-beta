import React from "react";
import { Card, CardContent } from "./ui/card";
import { Headset, Timer, ShieldCheck } from "lucide-react";
import { MdAutoFixHigh } from "react-icons/md";
import { useTranslations } from "next-intl";
type Props = {};

const Support = (props: Props) => {
  const tSupport = useTranslations("HomePage.Support");
  const supportItems = [
    {
      icon: <Headset />,
      title: `${tSupport("h1")}`,
      description: `${tSupport("p1")}`,
    },
    {
      icon: <Timer />,
      title: `${tSupport("h2")}`,
      description: `${tSupport("p2")}`,
    },
    {
      icon: <ShieldCheck />,
      title: `${tSupport("h3")}`,
      description: `${tSupport("p3")}`,
    },
    {
      icon: <MdAutoFixHigh />,
      title: `${tSupport("h4")}`,
      description: `${tSupport("p4")}`,
    },
  ];
  return (
    <section>
      <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-6">
        {tSupport("title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-6 transition-all mx-2 md:mx-3">
        {supportItems.map((item, index) => (
          <Card key={index} className="overflow-hidden move">
            <CardContent className="inner h-[180px]">
              <h3 className="flex items-center gap-3 scroll-m-20 text-2xl font-semibold tracking-tight">
                {item.icon}
                {item.title}
              </h3>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Support;
