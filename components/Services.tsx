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

type Props = {};

const Services = (props: Props) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center px-2 md:px-6 pb-10 mt-3 $
        }`}
    >
      <Image
        src={ServicesImg}
        alt="Snap Dev Banner"
        width={400}
        height={400}
        priority
        className="rounded-full  md:mx-auto border border-border p-2 mb-3"
      />
      <div className="w-full lg:w-[80%] ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Building the Future, One Service at a Time
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Snap Dev, we specialize in delivering cutting-edge solutions
          designed to help your business thrive in the digital age. From
          stunning websites to seamless mobile apps, optimized Shopify stores,
          and strategic marketing plans, our services are tailored to meet your
          unique needs and goals. Discover how we can transform your ideas into
          impactful digital experiences.
        </p>

        <h2 className="flex items-center gap-2 mt-8 pb-2 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <ChevronsLeftRightEllipsis size={25} />
          </span>
          Web Apps
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Snap Dev, we specialize in crafting custom websites tailored to
          your business needs. From responsive designs to advanced
          functionality, our web development team is experienced in creating
          engaging user experiences. We use modern technologies like React,
          Next.js, and Tailwind CSS to ensure your website is fast, scalable,
          and optimized for all devices.
        </p>

        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <TabletSmartphone size={25} />
          </span>
          Mobile Apps
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our mobile app development services bring your ideas to life on both
          Android and iOS platforms. Whether you need a simple app or a complex,
          feature-rich mobile solution, Snap Dev provides end-to-end
          services—from design to deployment. We prioritize intuitive user
          interfaces, performance, and cross-platform compatibility to ensure
          your app stands out.
        </p>

        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <NotebookPen size={25} />
          </span>
          Marketing Plans
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Snap Dev offers customized marketing plans designed to grow your brand
          and engage your audience. Whether you&#39;re just starting out or
          looking to refine your strategy, we provide a range of services,
          including SEO optimization, social media campaigns, and content
          marketing. Our goal is to ensure your business attracts the right
          attention and converts visitors into loyal customers.
        </p>

        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <LayoutTemplate size={25} />
          </span>
          Templates
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We offer an extensive selection of pre-designed templates to help
          speed up the development of your digital project. These templates are
          fully customizable, giving you the flexibility to create a website or
          app that reflects your unique brand while saving time and resources.
          Whether for e-commerce, portfolios, or blogs, our templates are
          designed to be user-friendly and fully responsive.
        </p>
        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <Bug size={25} />
          </span>
          Technical Support
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our tech support services are there for you whenever you need
          assistance. From troubleshooting issues to providing guidance on best
          practices, Snap Dev&#39;s team is ready to support you. We offer
          personalized solutions to ensure that your website, app, or system is
          always running smoothly, helping you maintain seamless operations
          without the technical headaches.
        </p>
        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <FaShopify size={25} />
          </span>
          Shopify
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Snap Dev excels in Shopify development, offering tailored e-commerce
          solutions that make it easier for you to manage your online store. We
          help with everything from theme customization to setting up payment
          gateways, ensuring a streamlined and efficient shopping experience.
          Whether you&#39;re starting a new store or enhancing an existing one,
          we create solutions that drive sales and boost customer satisfaction.
        </p>
        <h2 className="flex items-center gap-2 pb-2 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight border-b">
          <span className="bg-muted rounded-full p-2">
            <FaWordpress size={25} />
          </span>
          WordPress
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our WordPress development services are perfect for businesses looking
          for an easy-to-manage yet powerful website. We specialize in building
          custom WordPress themes, plugin integration, and site optimization.
          With our expertise, you can create a site that&#39;s visually
          stunning, easy to update, and fully functional, whether it&#39;s a
          blog, portfolio, or business website.
        </p>
      </div>
    </div>
  );
};

export default Services;
