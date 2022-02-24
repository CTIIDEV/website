import React from "react";
import { Button, Collapse, Typography, Row, Col } from "antd";

import ProductRisksCovered from "../../components/ProductRisksCovered";
import ProductRisksExcluded from "../../components/ProductRisksExcluded";
import ProductProcedureApplication from "../../components/ProductProcedureApplication";
import ProductProcedureClaim from "../../components/ProductProcedureClaim";
import ProductProcedureComplain from "../../components/ProductProcedureComplain";
import { FormContact } from "../../components/Home/FormContact";

import "../../css/Products.css";

const ProductsMotorVehicle = () => {
  const { Panel } = Collapse;
  const { Title } = Typography;

  return (
    <>
      <div
        className="section-wrapper products-banner"
        style={{
          backgroundImage:
            "url(http://45.64.99.135/storage/app/media/iStock/MOTOR%20INSURANCE.jpg)",
        }}
      >
        <div className="section-top banner-layer">
          <div className="layer-content">
            <Title className="top-title" level={2}>
              Motor and Vehicle Insurance
            </Title>
            <Title className="top-subtitle" level={4}>
              Perlindungan untuk kendaraan anda dari segala risiko kecelakaan
              yang tak terduga.
            </Title>
          </div>
          <div className="layer-bottom">
            <Button
              className="top__button"
              type="primary"
              href="http://45.64.99.135/our-product/motor-purchase"
              target="_blank"
            >
              Beli Asuransi
            </Button>
            <Button className="top__button" type="primary" href="#contactForm">
              Send Enquiry
            </Button>
          </div>
        </div>
      </div>
      <div className="section-wrapper products-product">
        <Row className="product-types-row">
          <Col className="product-types-row__col-item" xs={24} md={12}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                Comprehensive Protection
              </Title>
              <Title className="top-subtitle" level={5}>
                Comprehensive (All Risks) menlindungin anda dari resiko total
                loss dalam kecelakaan ringan ataupun berat, termasuk pencurian
                kendaraan.
              </Title>
            </div>
            {/* <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/pa-individu-purchase"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div> */}
          </Col>
          <Col className="product-types-row__col-item" xs={24} md={12}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                Total Lost Only
              </Title>
              <Title className="top-subtitle" level={5}>
                TLO menawarkan anda pengganti total untuk kendaraan anda jika
                kerugin kecelakaan melebihi 75% dari value kendaraan anda,
                termasuk pencurian.
              </Title>
            </div>
            {/* <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/personal-group-claim"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div> */}
          </Col>
        </Row>
        <div className="product-details">
          <div className="details-top">
            <Title className="top-title" level={3}>
              Product Details
            </Title>
          </div>
          <Collapse
            className="details-accordion"
            defaultActiveKey={["risks-covered"]}
            accordion
          >
            <Panel header="Risiko Yang Dijamin" key="risks-covered">
              <ProductRisksCovered />
            </Panel>
            <Panel header="Risiko Yang Tidak Dijamin" key="risks-excluded">
              <ProductRisksExcluded />
            </Panel>
            <Panel
              header="Prosedur Pengajuan Asuransi"
              key="procedure-application"
            >
              <ProductProcedureApplication />
            </Panel>
            <Panel header="Prosedur Klaim" key="procedure-claim">
              <ProductProcedureClaim />
            </Panel>
            <Panel header="Prosedur Pengjuan Keluhan" key="procedure-complain">
              <ProductProcedureComplain />
            </Panel>
          </Collapse>
        </div>
      </div>
      <FormContact />
    </>
  );
};

export default ProductsMotorVehicle;
