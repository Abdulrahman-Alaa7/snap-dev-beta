import React from "react";
import Heading from "../../../utils/Heading";
import About from "../../../../components/AboutUs";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title={`Snap Dev | About`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Page;
