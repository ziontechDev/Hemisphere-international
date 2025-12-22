import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/expBg.jpg";
import FirstSec from "../components/about/FirstSec";
import CoreValuesSec from "../components/about/CoreValuesSec";
import WhyChooseSec from "../components/about/WhyChooseSec";

const AboutUs = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        currentPage="About Us"
        bgImage={bannerBg}
      />
    <FirstSec/>
    <CoreValuesSec/>
    <WhyChooseSec/>
    </>
  );
};

export default AboutUs;
