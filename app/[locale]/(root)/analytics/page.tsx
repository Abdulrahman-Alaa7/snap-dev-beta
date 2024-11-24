import React from "react";
import Heading from "../../../utils/Heading";
import AnalyticsPage from "../../../../components/AnalyticsPage";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="fadeRight mx-2 lg:mx-0">
      <Heading
        title={`Snap Dev | Analytics`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <AnalyticsPage />
      </div>
    </div>
  );
};

export default Page;
