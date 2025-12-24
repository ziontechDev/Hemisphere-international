import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/pageBanners/divisionsBg.jpg";
import DivisionsList from "../components/divisions/DivisionsList";

const Divisions = () => {
  return (
    <>
      <PageBanner title="Divisions" currentPage="Divisions" bgImage={bannerBg} />
      <DivisionsList/>
    </>
  );
};

export default Divisions;
