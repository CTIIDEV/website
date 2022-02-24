import React from "react";
import { Image, Typography } from "antd";
import ComponentVideo from "../../components/ComponentVideo";

import profile_1 from "../../assets/profile_1.jpg";
import profile_2 from "../../assets/profile_2.jpg";
import profile_3 from "../../assets/profile_3.jpg";
import profile_4 from "../../assets/profile_4.jpg";
import profile_5 from "../../assets/profile_5.jpg";
import profile_6 from "../../assets/profile_6.jpg";
import profile_7 from "../../assets/profile_7.jpg";
import profile_8 from "../../assets/profile_8.jpg";
import "../../css/About.css";

const CompanyProfile = () => {
  const { Title } = Typography;
  return (
    <>
      <div className="section-wrapper about-company-profile">
        <div className="section-top">
          <Title className="top-subtitle" level={1}>
            Our Company Profile
          </Title>
          <i className="top-border" />
        </div>
        <div className="section-content">
          <div className="content-profile-imgs" sd={24} md={24}>
            <Image.PreviewGroup>
              <Image className="content-profile-img" src={profile_1} />
              <Image className="content-profile-img hidden" src={profile_2} />
              <Image className="content-profile-img hidden" src={profile_3} />
              <Image className="content-profile-img hidden" src={profile_4} />
              <Image className="content-profile-img hidden" src={profile_5} />
              <Image className="content-profile-img hidden" src={profile_6} />
              <Image className="content-profile-img hidden" src={profile_7} />
              <Image className="content-profile-img hidden" src={profile_8} />
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
      <div className="content-company-video">
        <ComponentVideo />
      </div>
    </>
  );
};

export default CompanyProfile;
