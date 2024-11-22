import React from "react";
import Heading from "../../../utils/Heading";
import { BarChartAnalytics } from "../../../../components/charts/BarChart";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="fadeRight mx-2 lg:mx-0">
      <Heading
        title={`Snap Dev | Analytics`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div className="p-1 md:p-6  w-full md:w-[50%] mx-auto">
        <BarChartAnalytics />
      </div>
      <div>
        <div className="p-2 md:p-6 lg:p-10 w-full lg:w-[80%] mx-auto mb-6">
          <h1 className="mb-6 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            In-depth Analytics and Insights
          </h1>
          <h2 className="mb-6 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Uncover valuable data to drive your business forward.
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-2   mb-3">
            Our comprehensive analytics suite provides you with deep insights
            into the performance of your applications. Gain a clear
            understanding of your users&#39;behavior, track key metrics, and
            make data-driven decisions to optimize your products.
          </p>
          <p className="font-bold ">Key Features:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <b>Comprehensive Performance Tracking:</b> Monitor vital metrics
              such as user engagement, retention rates, and conversion rates.
            </li>
            <li>
              <b>Integrations with Leading Analytics Tools:</b> We connecte our
              applications with industry-leading analytics platforms like{" "}
              <u className=" underline-offset-8">Google Analytics</u>,{" "}
              <u className=" underline-offset-8">TikTok Analytics Pixel</u>, and{" "}
              <u className=" underline-offset-8">Meta Pixel</u> for a holistic
              view of your user journey.
            </li>
            <li>
              <b>Revenue Analysis:</b> Gain insights into your revenue streams
              and identify opportunities for growth.
            </li>
            <li>
              <b>User Behavior Analysis:</b> Understand how users interact with
              your applications and identify areas for improvement.
            </li>
            <li>
              <b>Funnel Analysis:</b> Visualize the user journey and identify
              drop-off points.
            </li>
            <li>
              <b>Custom Event Tracking:</b> Track specific actions and behaviors
              to gain deeper insights into your users.
            </li>
          </ul>{" "}
          <b>Benefits:</b>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <b>Data-Driven Decision Making:</b> Make informed decisions based
              on real-time data.
            </li>
            <li>
              <b>Improved User Experience:</b> Optimize your applications to
              meet the needs of your users.
            </li>
            <li>
              <b>Increased Revenue:</b> Identify new revenue opportunities and
              maximize your return on investment.
            </li>
            <li>
              <b>Competitive Advantage:</b> Gain a deeper understanding of your
              market and stay ahead of the competition.
            </li>
          </ul>
          <b>With our advanced analytics capabilities, you can:</b>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Measure the success of your marketing campaigns.</li>
            <li>Identify trends and patterns in user behavior.</li>
            <li>Optimize your app store listings.</li>
            <li>Improve your app&#39;s overall performance.</li>
          </ul>
          <b>
            Take control of your data and unlock the full potential of your
            applications.
          </b>
        </div>
      </div>
    </div>
  );
};

export default Page;
