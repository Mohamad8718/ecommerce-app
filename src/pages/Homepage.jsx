import React, { useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Banner1 from "../components/Banner1";
import TrendingProducts from "../components/TrendingProducts";
import Banner2 from "../components/Banner2";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
      <Banner2 />
    </>
  );
};

export default Homepage;
