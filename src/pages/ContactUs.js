import React from "react";

import { Row, Col, Button, Typography } from "antd";

import { offices } from "../data";

import ContactForm from "../components/ContactForm";
import { FormContact } from "../components/Home/FormContact";
import "../css/Contact.css";

const ContactUs = () => {
  const { Title, Text } = Typography;
  const branches = offices.map((office, index) => {
    return (
      <Col className="content-row__col-item" xs={24} sm={24} md={8}>
        <div className="container">
          <div className="col-item-top">
            <Title className="top-title" level={3}>
              {office.location}
            </Title>
            <Title className="top-subtitle" level={5}>
              {office.city}
            </Title>
          </div>
          <div className="col-item-content">
            <Text className="content-address">
              {office.building} <br />
              {office.street}
            </Text>
            <Text className="content-telphone">
              {office.phone}
              <br />
              {office.fax}
            </Text>
          </div>
          <div className="col-item-bottom">
            <a
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=" + office.email
              }
              target="_blank"
            >
              <Button className="bottom__button" type="primary">
                Send an Email
              </Button>
            </a>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <>
      <div className="section-wrapper contact-us">
        <div className="section-top">
          <Title className="top-subtitle" level={1}>
            Offices
          </Title>
        </div>
        <div className="section-content">
          <Row className="content-row">
            <Col
              className="content-row__col-item main-office"
              xs={24}
              sm={24}
              md={8}
              style={{ marginBottom: "40px!important" }}
            >
              <div className="col-item-top">
                <Title className="top-title" level={3}>
                  Head Office
                </Title>
                <Title className="top-subtitle" level={5}>
                  Jakarta
                </Title>
              </div>
              <div className="col-item-content">
                <Text className="content-address">
                  The Tower 16th Floor <br />
                  Jl. Jend. Gatot Subroto Kav. 12-13, Jakarta 12930
                </Text>
                <Text className="content-telphone">
                  Tel : (62-21) 80 600 910 (hunting)
                </Text>
              </div>
              <div className="col-item-bottom">
                <Button
                  className="bottom__button"
                  type="primary"
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=cntaiping@id.cntaiping.com"
                  }
                  target="_blank"
                >
                  Send an Email
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="content-row">{branches}</Row>
        </div>
      </div>
      <FormContact />
    </>
  );
};

export default ContactUs;
