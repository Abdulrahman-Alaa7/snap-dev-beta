import React from "react";
import { Card, CardContent } from "./ui/card";
import { Headset, Timer, ShieldCheck } from "lucide-react";
import { MdAutoFixHigh } from "react-icons/md";
type Props = {};

export const supportItems = [
  {
    icon: <Headset />,
    title: "Dedicated Support",
    description:
      "Benefit from our dedicated support team available to assist you 24/7.",
  },
  {
    icon: <Timer />,
    title: "Quick Response Times",
    description:
      "Experience rapid response times to your inquiries and issues.",
  },
  {
    icon: <ShieldCheck />,
    title: "Clear Communication",
    description:
      "Our team communicates clearly and effectively, ensuring you always understand the status of your project.",
  },
  {
    icon: <MdAutoFixHigh />,
    title: "Proactive Support",
    description:
      "We proactively identify and address potential issues before they impact your business.",
  },
];
const Support = (props: Props) => {
  return (
    <section>
      <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-10">
        Your vision, our passion.
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
