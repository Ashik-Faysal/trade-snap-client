import React from "react";
import { Helmet } from "react-helmet-async";
import BannerSection from "../BannerSection";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Trade Snap | Home</title>
      </Helmet>
      <BannerSection />
      <Categories />
    </div>
  );
};

export default Home;
