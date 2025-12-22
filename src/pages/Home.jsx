import React from "react";
import BannerSec from "../components/home/BannerSec";
import AboutSec from "../components/home/AboutSec";
import DivisionSec from "../components/home/DivisionSec";
import ExperienceSec from "../components/home/ExperienceSec";
import ProductsSec from "../components/home/ProductsSec";
import ContactSec from "../components/home/ContactSec";
import WhyChooseSec from "../components/about/WhyChooseSec";

const Home = () => {
  return (
    <>
      <BannerSec />
      <AboutSec/>
      <DivisionSec/>
      <ExperienceSec/>
      <ProductsSec/>
      <WhyChooseSec/>
      <ContactSec/>
    </>
  );
};

export default Home;
