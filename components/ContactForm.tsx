"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLocale } from "next-intl";
import countriesData from "../database/countries.json";

type Props = {};

const ContactForm = (props: Props) => {
  const lang = useLocale();

  const sortDataByLocale = (data: any, arKey: any, enKey: any, lang: any) => {
    return [...data].sort((a, b) =>
      lang === "ar"
        ? a[arKey].localeCompare(b[arKey], "ar", { sensitivity: "base" })
        : a[enKey].localeCompare(b[enKey], "en", { sensitivity: "base" })
    );
  };

  const countries = sortDataByLocale(countriesData, "name_ar", "name_en", lang);

  const defaultValues = {
    fullName: "",
    email: "",
    phone_number: "",
    country: "",
    company: "",
    helpTobic: "",
    message: "",
  };

  const checkOutSchema = z.object({
    fullName: z.string().min(3, { message: `Name is required` }).max(50, {
      message: `Over 50`,
    }),
    email: z
      .string()
      .min(1, {
        message: `Email is required`,
      })
      .email({
        message: `Not valid`,
      }),
    phone_number: z
      .string()
      .min(6, {
        message: `Phone Number is required`,
      })
      .max(45, { message: `Over 45` }),
    country: z.string().min(3, { message: `Country is required` }).max(100, {
      message: `Over 100`,
    }),
    company: z
      .string()
      .max(150, {
        message: `Over 150`,
      })
      .optional(),
    helpTobic: z.string().min(3, { message: `Topic is required` }).max(150, {
      message: `Over 150`,
    }),
    message: z
      .string()
      .min(5, {
        message: `Message is required`,
      })
      .max(250, {
        message: `Over 250`,
      }),
  });

  type CheckoutValues = z.infer<typeof checkOutSchema>;

  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkOutSchema),
    defaultValues,
  });

  const onSubmit = async (data: CheckoutValues) => {
    try {
      const NewData = {
        fullName: data.fullName,
        email: data.email,
        phone_number: data.phone_number,
        country: data.country,
        company: data?.company,
        helpTobic: data.helpTobic,
        message: data.message,
      };
      console.log(NewData);
      form.reset();
      toast.success(`Send SuccessFuly`);
    } catch (error: any) {
      toast.error(`Error`);
    }
  };

  const helpTopicData = [
    { topic_en: "Website", topic_ar: "موقع الكتروني" },
    { topic_en: "Mobile Application", topic_ar: "تطبيق" },
    { topic_en: "Marketing", topic_ar: "تسويق" },
    { topic_en: "Social Media", topic_ar: "حسابات تواصل اجتماعي" },
    { topic_en: "Technical Support", topic_ar: " دعم فني" },
    { topic_en: "Custom Template", topic_ar: "قوالب مخصصه" },
    { topic_en: "Hosting & Domain", topic_ar: " استضافة و دومين" },
    { topic_en: "Shopify", topic_ar: "شوبيفاي" },
    { topic_en: "Wordpress", topic_ar: " ورد بريس" },
    { topic_en: "Other", topic_ar: " اخرى" },
  ];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-col justify-center mx-auto items-center gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={`Name`} {...field} className="py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={`Email`} {...field} className="py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      {...field}
                      className="py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Country / Region</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControl className="py-6">
                      <SelectTrigger aria-label="Select a country">
                        <SelectValue placeholder={`Select a country`} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country, index) => (
                        <SelectItem
                          key={index}
                          value={
                            lang === "ar" ? country.name_ar : country.name_en
                          }
                          className={`flex flex-col justify-center ${
                            lang === "ar" ? "items-end" : "items-start"
                          } gap-2`}
                        >
                          {lang === "ar" ? country.name_ar : country.name_en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Company (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Company`}
                      {...field}
                      className="py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="helpTobic"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>What can we help you with?</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControl className="py-6">
                      <SelectTrigger aria-label="Select a topic">
                        <SelectValue placeholder={`Select a topic`} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {helpTopicData.map((topic, index) => (
                        <SelectItem
                          key={index}
                          value={
                            lang === "ar" ? topic.topic_ar : topic.topic_en
                          }
                          className={`flex flex-col justify-center ${
                            lang === "ar" ? "items-end" : "items-start"
                          } gap-2`}
                        >
                          {lang === "ar" ? topic.topic_ar : topic.topic_en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Messgae`}
                      className="resize-none w-full min-h-[100px] max-h-[150px] overflow-auto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
          </div>

          <Button
            type="submit"
            className="w-full lg:w-[80%] h-11 rounded-full mx-auto flex justify-center items-center"
          >
            Send message
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
