import React from "react";
import Heading from "../../../utils/Heading";
import ContactUs from "../../../../components/ContactUs";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title={`Snap Dev | Contact Us`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Page;
