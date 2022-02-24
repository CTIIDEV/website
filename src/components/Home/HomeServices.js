import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";

import { home__services } from "../../data";

const HomeService = () => {
  const { Title } = Typography;
  const services = home__services.services.map((data, i) => {
    return (
      <Col className="content-row__col-item" xs={24} sm={12} md={6}>
        <Card
          key={data.title}
          className="col-item__card"
          cover={<img src={data.img} />}
        >
          <Title className="card-title" level={4}>
            {data.title}
          </Title>
          <Button
            className="card__button"
            target="_blank"
            type="primary"
            href={data.url}
          >
            Learn More
          </Button>
        </Card>
      </Col>
    );
  });
  return (
    <div className="section-wrapper home-services">
      <div className="section-top">
        <Title className="top-title" level={1}>
          {home__services.title}
        </Title>
        <Title className="top-subtitle" level={3}>
          {home__services.subtitle}
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Row
          className="content-row"
          gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}
        >
          {services}
        </Row>
      </div>
    </div>
  );
};

export default HomeService;
