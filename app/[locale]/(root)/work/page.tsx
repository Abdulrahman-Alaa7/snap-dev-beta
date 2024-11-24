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
        <OurWork />
      </div>
    </div>
  );
};

export default Page;
