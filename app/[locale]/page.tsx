import Heading from "../utils/Heading";
import WhyUs from "../../components/WhyUs";
import Support from "../../components/Support";
import FullServices from "../../components/FullServices";
import SomeWork from "../../components/SomeWork";
import ContactHome from "../../components/ContactHome";
import NightSky from "../../components/Hero";

export default function Home() {
  return (
    <div>
      <Heading
        title={`Snap Dev`}
        description="Snap Dev is a company that develops websites, mobile applications, and provides technical support."
        keywords="websites, web, mobile appllication, apps, tech"
      />
      <div>
        <NightSky />
        <WhyUs />
        <Support />
        <FullServices />
        <SomeWork />
        <ContactHome />
      </div>
    </div>
  );
}
