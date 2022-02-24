import { React, useState } from "react";
import { Button, Typography, Space, Row, Col, Card } from "antd";
import { FaShip } from "react-icons/fa";
import { BsPersonFill, BsHouseDoorFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { GiCargoShip, GiCommercialAirplane } from "react-icons/gi";
import "../../css/Claims.css";

const Claims = () => {
  const { Title, Text } = Typography;
  return (
    <>
      <div className="section-wrapper claiming-procedure">
        <div className="section-top">
          <Title className="top-title" level={3}>
            Claim Procedures
          </Title>
          <i className="top-border" />
        </div>
        <div className="section-content">
          <div className="content-procedure-instructions">
            <Space direction="vertical">
              <Text>
                In a matter of Insured claiming Loss in accordance to this
                Policy, Insured must:
              </Text>
              <Text>
                <ol>
                  <li>
                    Fill claim report form which provided by insurer and
                    submitted to the Insurer
                  </li>
                  <li>
                    Submit a copy of the policy and hand in the news report or
                    Letter of Statement about the loss event or the damage
                  </li>
                  <li>
                    Submit a report with complete detail in sincere from his/her
                    knowledge about the cause and reason for the loss event
                  </li>
                  <li>
                    Giving relevant and reasonable Explanation and other
                    Evidence as required by the Insurer
                  </li>
                </ol>
              </Text>
            </Space>
          </div>
        </div>
      </div>
      <div className="section-wrapper claiming-forms">
        <div className="section-top">
          <Title className="top-title" level={3}>
            Claim Forms
          </Title>
          <i className="top-border" />
        </div>
        <div className="section-content">
          <Row
            className="content-row"
            gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}
          >
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta title="Personal Accident" description="Claim Form" />
              </Card>
            </Col>
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta title="Housing Insurance" description="Claim Form" />
              </Card>
            </Col>
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta
                  title="Motor Vehicle Insurance"
                  description="Claim Form"
                />
              </Card>
            </Col>
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta title="Travel Insurance" description="Claim Form" />
              </Card>
            </Col>
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta
                  title="Marine Hull Insurance"
                  description="Claim Form"
                />
              </Card>
            </Col>
            <Col className="content-row__col-item" xs={24} sm={12} md={8}>
              <Card className="col-item__card">
                <Card.Meta
                  title="Marine Cargo Insurance"
                  description="Claim Form"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* <GeneralAgentForm /> */}
    </>
  );
};

export default Claims;
