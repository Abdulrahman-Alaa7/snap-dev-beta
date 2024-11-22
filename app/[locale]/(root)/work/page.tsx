import React from "react";
import Heading from "../../../utils/Heading";
import OurWork from "../../../../components/OurWork";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title={`Snap Dev | Work`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <h2 className="gradient-text scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl text-center mb-6 mt-12">
          A small selection of recent projects
        </h2>
        <OurWork />
      </div>
    </div>
  );
};

export default Page;
