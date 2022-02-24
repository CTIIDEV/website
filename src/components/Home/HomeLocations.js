import React from "react";
import { Typography } from "antd";

const HomeLocations = () => {
  const { Title } = Typography;
  return (
    <div className="section-wrapper home-locations">
      <div className="section-top">
        <Title className="top-title" level={1}>
          We Provide Protection All Over Nusantara
        </Title>
        <Title className="top-subtitle" level={3}>
          We have branches in Big cities all across Indonesia
        </Title>
        <Title className="top-description" level={3}>
          Jakarta, Tangerang, Bandung, Surabaya, Medan
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <img
          className="content-img"
          src="http://45.64.99.135/storage/app/media/cropped-images/7bc32a4bfd6b5-23-318-1162-554-1559308241.png"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
};

export default HomeLocations;
