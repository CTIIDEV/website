import React from "react";
import { Button, Collapse, Typography, Row, Col } from "antd";

import ProductRisksCovered from "../../components/ProductRisksCovered";
import ProductRisksExcluded from "../../components/ProductRisksExcluded";
import ProductProcedureApplication from "../../components/ProductProcedureApplication";
import ProductProcedureClaim from "../../components/ProductProcedureClaim";
import ProductProcedureComplain from "../../components/ProductProcedureComplain";
import ContactForm from "../../components/ContactForm";
import { FormContact } from "../../components/Home/FormContact";

import "../../css/Products.css";

const ProductsPA = () => {
  const { Panel } = Collapse;
  const { Title } = Typography;

  return (
    <>
      <div
        className="section-wrapper products-banner"
        style={{
          backgroundImage:
            "url(http://45.64.99.135/storage/app/media/iStock/PERSONAL%20ACCIDENT%20INS.jpg)",
        }}
      >
        <div className="section-top banner-layer">
          <div className="layer-content">
            <Title className="top-title" level={2}>
              Personal Accident Insurance
            </Title>
            <Title className="top-subtitle" level={4}>
              Lindungi diri Anda dari segala risiko kecelakaan yang tak terduga.
              <br />
              <br />
              Risiko terlindungi, Nikmati Pelayanan Taiping.
            </Title>
          </div>
          <div className="layer-bottom">
            <Button
              className="top__button"
              type="primary"
              href="http://45.64.99.135/our-product/pa-individu-purchase"
              target="_blank"
            >
              Beli Asuransi Individu
            </Button>
            <Button
              className="top__button"
              type="primary"
              href="http://45.64.99.135/our-product/personal-group-claim"
              target="_blank"
            >
              Beli Asuransi Kelompok
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
                Asuransi Kecelakaan Diri Untuk Individu
              </Title> 
              <Title className="top-subtitle" level={5}>
                Perlindungan untuk 1 sampai 5 orang
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/pa-individu-purchase"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div>
          </Col>
          <Col className="product-types-row__col-item" xs={24} md={12}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                Asuransi Kecelakaan Diri Kelompok
              </Title>
              <Title className="top-subtitle" level={5}>
                Perlindungan untuk kelompok atau korporasi
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/personal-group-claim"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div>
          </Col>
        </Row>
        <div class="product-details">
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

export default ProductsPA;
