import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/pageBanners/productsBg.jpg";
import ProductsList from "../components/product/ProductsList";

const Products = () => {
  return (
    <>
      <PageBanner title="Products" currentPage="Products" bgImage={bannerBg} />
      <ProductsList/>
    </>
  );
};

export default Products;
