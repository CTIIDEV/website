import React from "react";
import { Button, Collapse, Typography, Row, Col } from "antd";

import ProductRisksCovered from "../../components/ProductRisksCovered";
import ProductRisksExcluded from "../../components/ProductRisksExcluded";
import ProductProcedureApplication from "../../components/ProductProcedureApplication";
import ProductProcedureClaim from "../../components/ProductProcedureClaim";
import ProductProcedureComplain from "../../components/ProductProcedureComplain";

import "../../css/Products.css";
import { FormContact } from "../../components/Home/FormContact";

const ProductsHousing = () => {
  const { Panel } = Collapse;
  const { Title } = Typography;

  return (
    <>
      <div
        className="section-wrapper products-banner"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        }}
      >
        <div className="section-top banner-layer">
          <div className="layer-content">
            <Title className="top-title" level={2}>
              Housing Insurance
            </Title>
            <Title className="top-subtitle" level={4}>
              Rumah adalah dimana cinta berada.
              <br />
              <br />
              Lindungin rumah, barang dan orang yang Anda cintai sekarang juga.
            </Title>
          </div>
          <div className="layer-bottom">
            <Button
              className="top__button"
              type="primary"
              href="http://45.64.99.135/our-product/property-purchase"
              target="_blank"
            >
              Beli Asuransi Rumah
            </Button>
            <Button className="top__button" type="primary" href="#contactForm">
              Send Enquiry
            </Button>
          </div>
          {/* <div className="text-wrapper product-intro">
            <div className="introduction">
              <Title level={2}>Housing Insurance</Title>
              <Title level={4}>
                Rumah adalah dimana cinta berada.
                <br />
                Lindungin rumah, barang dan orang yang Anda cintai sekarang
                juga.
              </Title>
            </div>
            <Button
              type="primary"
              href="http://45.64.99.135/our-product/property-purchase"
              target="_blank"
              style={{ marginRight: "14px" }}
            >
              Buy Product
            </Button>
            <Button type="ghost" href="#contactForm">
              Send Enquiry
            </Button>
          </div> */}
        </div>
      </div>
      <div className="section-wrapper products-product">
        <Row className="product-types-row">
          <Col className="product-types-row__col-item" xs={24} md={8}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                Kebakaran
              </Title>
              <Title className="top-subtitle" level={5}>
                Menanggung semua kerusakan pada properti yang disebabkan oleh
                api
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/property-purchase"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div>
          </Col>
          <Col className="product-types-row__col-item" xs={24} md={8}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                All Risks
              </Title>
              <Title className="top-subtitle" level={5}>
                Menutup semua kerugian yang disebabkan oleh kebakaran, banjir,
                kerusuhan, pemboblan rumah dan lainnya
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/property-purchase"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div>
          </Col>
          <Col className="product-types-row__col-item" xs={24} md={8}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                All Risks + Earthquake
              </Title>
              <Title className="top-subtitle" level={5}>
                Melindungi rumah dari segala kerugian termasuk gempa bumi
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                href="http://45.64.99.135/our-product/property-purchase"
                target="_blank"
              >
                Beli Sekarang
              </Button>
            </div>
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
              <ul class="product-risks-list">
                <li>Kebakaran</li>
                <li>
                  Kerusakan yang ditimbulkan oleh kerusuhan ataupun gangguan
                  publik lainnya
                </li>
                <li>Kerusakan yang ditimbulkan oleh kegiatan terorisme</li>
                <li>Pencurian ataupun perampokan</li>
                <li>
                  Kecelakaan diri akibat aksi pencurian ataupun perampokan
                </li>
                <li>Kerusakan yang ditimbulkan oleh bencana alam (opsional)</li>
              </ul>
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

export default ProductsHousing;
