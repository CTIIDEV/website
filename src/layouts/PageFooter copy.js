import React from "react";
import { Avatar, Row, Col } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { footer, footer__organization } from "../data";

import footerAAUI from "../assets/footer-aaui.png";
import footerMariBerasuransi from "../assets/footer-mari-berasuransi.png";
import footerOJK from "../assets/footer-ojk.png";

import "../css/PageFooter.css";

const PageFooter = () => {
  return (
    <>
      <footer className="footer page-wrapper">
        <div className="footer-wrap page">
          <Row>
            {footer.map((foot, index) => (
              <Col
                key={index.toString()}
                md={6}
                xs={24}
                className="footer-item-col"
              >
                <div className="footer-item">
                  <h2>{foot.title}</h2>
                  {foot.children.map((child) => (
                    <div key={child.link}>
                      <a target="_blank" href={child.link}>
                        {child.title}
                      </a>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
            <Col md={6} xs={24} className="footer-item-col">
              <div className="footer-item">
                <h2>Our Office</h2>
              </div>
              <div>
                <p>
                  The Tower Lt. 16 <br />
                  Jl. Jend Gatot Subroto Kav 12, <br />
                  Setiabudi, Jakarta Selatan 12930 <br />
                  Tel 021-8060 0910
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <div className="page">
            <Row>
              <Col md={20} xs={24}>
                {/* <span
                  className="mobile-hide"
                  style={{
                    lineHeight: "16px",
                    paddingRight: 12,
                    marginRight: 11,
                  }}
                >
                  <a
                    href="https://docs.alipay.com/policies/privacy/antfin"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Careers
                  </a>
                  <a
                    href="https://www.facebook.com/cntaiping/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Avatar
                      shape="square"
                      size="small"
                      style={{ marginRight: "10px", background: "#43609C" }}
                      icon={<FacebookFilled />}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/idcntaiping/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Avatar
                      shape="square"
                      size="small"
                      style={{
                        marginRight: "10px",
                        background:
                          "linear-gradient(#4F5BD5, #962FBF, #D62976, #FA7E1E, #FEDA75)",
                      }}
                      icon={<InstagramFilled />}
                    />
                  </a>
                </span> */}
                <span style={{ marginRight: 12 }}>
                  © Copyright 2021 PT. China Taiping Insurance Indonesia
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      <div className="footer-organization">
        <Row>
          <Col md={8} xs={24} className="footer-item-img-col">
            <img src={footerAAUI} className="footer-item-img" />
          </Col>
          <Col md={8} xs={24} className="footer-item-img-col">
            <img src={footerOJK} className="footer-item-img" />
          </Col>
          <Col md={8} xs={24} className="footer-item-img-col">
            <img
              src={footerMariBerasuransi}
              className="footer-item-img"
              style={{ maxWidth: "150px" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageFooter;
