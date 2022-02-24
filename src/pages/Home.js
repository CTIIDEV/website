import React from "react";

import HomeBanner from "../components/Home/HomeBanner";
import HomeService from "../components/Home/HomeServices";
import HomeLocations from "../components/Home/HomeLocations";
import ComponentVideo from "../components/ComponentVideo";
import HomeCustomers from "../components/Home/HomeCustomers";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeService />
      <HomeLocations />
      <ComponentVideo />
      <HomeCustomers />
    </>
  );
};

export default Home;
