import React from "react";
import { Carousel } from "antd";

import { banner } from "../../data";

const HomeBanner = () => {
  const company = banner.map((data) => {
    return (
      <div className="carousel-slide">
        <img className="carousel-slide__img" src={data.url} />
      </div>
    );
  });
  return (
    <div className="section-wrapper home-banner">
      <Carousel className="banner-carousel" autoplay="true">
        {company}
      </Carousel>
    </div>
  );
};

export default HomeBanner;
