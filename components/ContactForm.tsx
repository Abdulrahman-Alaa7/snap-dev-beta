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
import { useLocale, useTranslations } from "next-intl";
import countriesData from "../database/countries.json";

type Props = {};

const ContactForm = (props: Props) => {
  const helpTopicData = [
    { topic_en: "Website", topic_ar: "موقع ويب" },
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

  const lang = useLocale();
  const t = useTranslations("ContactUsPage.ContactForm");

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
    fullName: z
      .string()
      .min(3, { message: `${t("nameMinValid")}` })
      .max(50, {
        message: `${t("nameMaxValid")}`,
      }),
    email: z
      .string()
      .min(1, {
        message: `${t("emailMinValid")}`,
      })
      .email({
        message: `${t("emailMaxValid")}`,
      }),
    phone_number: z
      .string()
      .min(6, {
        message: `${t("phoneNumberMinValid")}`,
      })
      .max(16, { message: `${t("phoneNumberMaxValid")}` }),
    country: z
      .string()
      .min(3, { message: `${t("countryMinValid")}` })
      .max(50, {
        message: `${t("countryMaxValid")}`,
      }),
    company: z
      .string()
      .max(150, {
        message: `${t("ccompanyMaxValid")}`,
      })
      .optional(),
    helpTobic: z
      .string()
      .min(3, { message: `${t("topicMinValid")}` })
      .max(150, {
        message: `${t("topicMaxValid")}`,
      }),
    message: z
      .string()
      .min(5, {
        message: `${t("messageMinValid")}`,
      })
      .max(250, {
        message: `${t("messageMaxValid")}`,
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
      toast.success(`${t("successMsg")}`);
    } catch (error: any) {
      toast.error(`${t("errorMsg")}`);
    }
  };

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
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`${t("name")}`}
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
              name="email"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`${t("email")}`}
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
              name="phone_number"
              render={({ field }) => (
                <FormItem className="w-full lg:w-[80%]">
                  <FormLabel>{t("phoneNumber")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={`${t("phoneNumber")}`}
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
                <FormItem className="w-full lg:w-[80%] ">
                  <FormLabel>{t("country")}</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControl className="py-6">
                      <SelectTrigger
                        aria-label="Select a country"
                        className={`${lang === "ar" && "flex-row-reverse"}`}
                      >
                        <SelectValue placeholder={`${t("selectCountry")}`} />
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
                  <FormLabel>{t("company")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`${t("companyInput")}`}
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
                  <FormLabel>{t("topic")}</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControl className="py-6">
                      <SelectTrigger
                        aria-label="Select a topic"
                        className={`${lang === "ar" && "flex-row-reverse"}`}
                      >
                        <SelectValue placeholder={`${t("selectTopic")}`} />
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
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`${t("message")}`}
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
            {t("submit")}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
