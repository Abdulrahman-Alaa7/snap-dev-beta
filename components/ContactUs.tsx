import React from "react";
import { MessageCircleMore, PhoneCall, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import ContactForm from "./ContactForm";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div>
      <div className="relative my-12">
        <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-3 mt-6">
          Get In Touch
        </h2>
        <Send
          size={180}
          className="flex justify-center items-center mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 "
        />
        <p className="text-center font-[400] text-gray-700 leading-loose text-sm sm:text-[18px] px-2 dark:text-[#939db6] mb-4">
          Feel free to cantact us? Submit your queries here and we will listen.
        </p>
      </div>
      <div className="flex justify-center flex-col-reverse lg:flex-row  mx-auto w-full px-2 xl:w-[80%] gap-8 my-12">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 ">
          <Card className="bg-slate-900 text-white/80 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[25] font-normal">
                <PhoneCall
                  className="text-[#222] bg-slate-600 text-white/80 rounded-xl border border-[#9e9e9e29] dark:border-border p-2"
                  size={40}
                />
                Call Us Directly At
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-[25px]">+20 109 873 3157</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`tel:+2001098198827`}
                className="flex justify-center items-center mx-auto bg-slate-800 text-white rounded-full w-full h-11 hover:bg-slate-700"
              >
                Contact Us
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-muted dark:bg-[#ffffff05] dark:text-white/80 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[25] font-normal">
                <MessageCircleMore
                  className="text-[#222] dark:bg-muted dark:text-white bg-white rounded-xl p- border border-border p-2"
                  size={40}
                />
                Chat With Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-[25px]"> support@snapdev.com</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`mailto:support@snapdev.com`}
                className="flex justify-center items-center mx-auto bg-[#ccc] text-gray-800  dark:text-white rounded-full w-full h-11 hover:bg-muted-foreground/80 dark:bg-[#ffffff09] dark:hover:bg-[#ffffff06]"
              >
                Contact Us
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Card className="rounded-3xl">
            <CardContent className="py-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
