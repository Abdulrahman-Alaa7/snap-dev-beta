import React from "react";
import Heading from "../../../utils/Heading";
import Tech from "../../../../components/Tech";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title={`Snap Dev | Technology`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <Tech />
      </div>
    </div>
  );
};

export default Page;
