import React from "react";
import { Avatar, Row, Col, Typography } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { footer, footer__organization } from "../data";

import footerAAUI from "../assets/footer-aaui.png";
import footerMariBerasuransi from "../assets/footer-mari-berasuransi.png";
import footerOJK from "../assets/footer-ojk.png";

import "../css/PageFooter.css";

const PageFooter = () => {
  return (
    <>
      <footer className="layout-footer">
        {/* <div className="footer-wrap page"> */}
        <div className="footer-content">
          <Row className="content-row">
            <Col className="content-row__col-item" md={6} xs={24}>
              <div className="footer-item">
                <Typography.Title level={4}>Products</Typography.Title>
                <div className="footer-link">
                  <a target="_blank" href="/products/personal-accident">
                    Personal Accident
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/products/housing">
                    Housing Insurance
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/products/motor-vehicle">
                    Motor Vehicle
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/products/travel">
                    Travel Insurance
                  </a>
                </div>
                {/* <div className="footer-link">
                  <a target="_blank" href="">
                    Marine Hull
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="">
                    Marine Cargo
                  </a>
                </div> */}
              </div>
            </Col>
            <Col className="content-row__col-item" md={6} xs={24}>
              <div className="footer-item">
                <Typography.Title level={4}>Claims</Typography.Title>
                <div className="footer-link">
                  <a target="_blank" href="/claim/procedure">
                    Claiming Procedure
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/claim/report-form">
                    Report Claim Form
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/claim/motor-vehicle-form">
                    Motor Vehicle Claim Form
                  </a>
                </div>
              </div>
            </Col>
            <Col className="content-row__col-item" md={6} xs={24}>
              <div className="footer-item">
                <Typography.Title level={4}>About Us</Typography.Title>
                <div className="footer-link">
                  <a target="_blank" href="/about/company-profile">
                    Company Profile
                  </a>
                </div>
                {/* <div className="footer-link">
                  <a target="_blank" href="/about/organizational-chart">
                    Organizational Chart
                  </a>
                </div> */}
                <div className="footer-link">
                  <a target="_blank" href="/about/financial-report">
                    Financial Report
                  </a>
                </div>
                <div className="footer-link">
                  <a target="_blank" href="/about/policy">
                    Policy
                  </a>
                </div>
              </div>
            </Col>
            <Col className="content-row__col-item" md={6} xs={24}>
              <div className="footer-item">
                <Typography.Title level={4}>Our Office</Typography.Title>
                <Typography.Text>
                  The Tower Lt. 16 <br />
                  Jl. Jend Gatot Subroto Kav 12, <br />
                  Setiabudi, Jakarta Selatan 12930 <br />
                  Tel 021-8060 0910
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <Row className="bottom-row">
            <Col className="bottom-row__col-item" md={20} xs={24}>
              <span>
                © Copyright 2021 PT. China Taiping Insurance Indonesia
              </span>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-organization">
        <Row className="organization-row">
          <Col md={8} xs={24} className="organization-row__col-item">
            <img
              src={footerMariBerasuransi}
              className="col-item__img"
              style={{ maxWidth: "150px" }}
            />
          </Col>
          <Col md={8} xs={24} className="organization-row__col-item">
            <img src={footerOJK} className="col-item__img" />
          </Col>
          <Col md={8} xs={24} className="organization-row__col-item">
            <img src={footerAAUI} className="col-item__img" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageFooter;
