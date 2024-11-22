import React from "react";
import Heading from "../../../utils/Heading";
import Services from "../../../../components/Services";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title={`Snap Dev | Services`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <Services />
      </div>
    </div>
  );
};

export default Page;
