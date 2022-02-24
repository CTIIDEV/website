import React from "react";
import { Col, Row, Typography } from "antd";

import { home__customers } from "../../data";

const HomeCustomers = () => {
  const { Title } = Typography;
  const customers = home__customers.children.map((img, i) => (
    <Col className="content-row__col-item" md={6} xs={24} key={i.toString()}>
      <img src={img} alt="Image" />
    </Col>
  ));
  return (
    <div className="section-wrapper home-customers">
      <div className="section-top">
        <Title className="top-title" level={1} style={{ color: "#0062B3" }}>
          {home__customers.title}
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Row className="content-row">{customers}</Row>
      </div>
    </div>
  );
};

export default HomeCustomers;
