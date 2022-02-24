import React, { useState } from "react";
import { Button, Collapse, Typography, Row, Col, Modal, Table } from "antd";

import ProductRisksCovered from "../../components/ProductRisksCovered";
import ProductRisksExcluded from "../../components/ProductRisksExcluded";
import ProductProcedureApplication from "../../components/ProductProcedureApplication";
import ProductProcedureClaim from "../../components/ProductProcedureClaim";
import ProductProcedureComplain from "../../components/ProductProcedureComplain";
import { FormContact } from "../../components/Home/FormContact";

import "../../css/Products.css";

import { productTravel__asean } from "../../data";
import { productTravel__global_executive } from "../../data";
import { productTravel__global_standar } from "../../data";

const ProductsTravel = () => {
  const { Panel } = Collapse;
  const { Title } = Typography;
  const { Column } = Table;
  const [isModalAseanVisible, setIsModalAseanVisible] = useState(false);
  const [isModalGlobalVisible, setIsModalGlobalVisible] = useState(false);

  const showModalAsean = () => {
    setIsModalAseanVisible(true);
  };

  const showModalGlobal = () => {
    setIsModalGlobalVisible(true);
  };

  const handleAseanOk = () => {
    setIsModalAseanVisible(false);
  };

  const handleGlobalOk = () => {
    setIsModalGlobalVisible(false);
  };

  const styleBanner = {
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.65), rgba(255, 255, 255, 0.7)), url(http://45.64.99.135/storage/app/media/iStock/TRAVEL%20INSURANCE.jpg)",
  };

  return (
    <>
      <div
        className="section-wrapper products-banner"
        style={{
          backgroundImage:
            "url(http://45.64.99.135/storage/app/media/iStock/TRAVEL%20INSURANCE.jpg)",
        }}
      >
        <div className="section-top banner-layer">
          <div className="layer-content">
            <Title className="top-title" level={2}>
              Personal Accident Insurance
            </Title>
            <Title className="top-subtitle" level={4}>
              Lindungi diri Anda dari segala risiko kecelakaan yang tak terduga
              selama perjalanan Anda.
              <br />
              <br />
              Liburan tanpa cemas dengan asuransi China Taiping Indonesia
            </Title>
          </div>
          <div className="layer-bottom">
            <Button
              className="top__button"
              type="primary"
              href="http://45.64.99.135/our-product/travel-purchase"
              target="_blank"
            >
              Beli Travel Insurance
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
                ASEAN Extra
              </Title>
              <Title className="top-subtitle" level={5}>
                Menanggung resiko selama perjalanan di wilayah ASEAN, Mainland
                China, Hongkong, Macau & Taiwan
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                // href="http://45.64.99.135/our-product/pa-individu-purchase"
                // target="_blank"
                onClick={showModalAsean}
              >
                Lihat Rincian
              </Button>
              <Modal
                visible={isModalAseanVisible}
                onOk={handleAseanOk}
                onCancel={handleAseanOk}
              >
                <Table
                  className="asean-table"
                  dataSource={productTravel__asean}
                  pagination={false}
                >
                  <Column
                    title="Panjang Perjalanan (Hari)"
                    dataIndex="duration"
                    key="duration"
                  />
                  <Column
                    title="Individu"
                    dataIndex="individu"
                    key="individu"
                  />
                  <Column
                    title="Keluarga"
                    dataIndex="keluarga"
                    key="keluarga"
                  />
                </Table>
              </Modal>
            </div>
          </Col>
          <Col className="product-types-row__col-item" xs={24} md={12}>
            <div className="col-item-top">
              <Title className="top-title" level={3}>
                Global
              </Title>
              <Title className="top-subtitle" level={5}>
                Menanggung resiko selama perjalanan di wilayah Selain ASEAN
                Extra kecuali Indonesia
              </Title>
            </div>
            <div className="col-item-bottom">
              <Button
                className="bottom__button"
                type="primary"
                // href="http://45.64.99.135/our-product/pa-individu-purchase"
                // target="_blank"
                onClick={showModalGlobal}
              >
                Lihat Rincian
              </Button>
              <Modal
                visible={isModalGlobalVisible}
                onOk={handleGlobalOk}
                onCancel={handleGlobalOk}
              >
                <h2>Executive</h2>
                <Table
                  className="global-table"
                  dataSource={productTravel__global_executive}
                  pagination={false}
                >
                  <Column
                    title="Panjang Perjalanan (Hari)"
                    dataIndex="duration"
                    key="duration"
                  />
                  <Column
                    title="Individu"
                    dataIndex="individu"
                    key="individu"
                  />
                  <Column
                    title="Keluarga"
                    dataIndex="keluarga"
                    key="keluarga"
                  />
                </Table>
                <h2 style={{ marginTop: "1.5rem" }}>Standard</h2>
                <Table
                  className="global-table"
                  dataSource={productTravel__global_standar}
                  pagination={false}
                >
                  <Column
                    title="Panjang Perjalanan (Hari)"
                    dataIndex="duration"
                    key="duration"
                  />
                  <Column
                    title="Individu"
                    dataIndex="individu"
                    key="individu"
                  />
                  <Column
                    title="Keluarga"
                    dataIndex="keluarga"
                    key="keluarga"
                  />
                </Table>
              </Modal>
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
                <li>Meninggal dan Cacat Permanen</li>
                <li>Pengantian biaya medis akibat kecelakaan</li>
                <li>Evakuasi darurat</li>
                <li>Biaya telepon darurat</li>
                <li>Pembatalan perjalanan</li>
                <li>Penundaan perjalanan</li>
                <li>
                  Kerugian akibat kehilangan ataupun kerusakan bagasi pribadi
                  termasuk laptop
                </li>
                <li>Kehilangan dokumen perjalanan</li>
              </ul>
            </Panel>
            <Panel header="Risiko Yang Tidak Dijamin" key="risks-excluded">
              <ul class="product-risks-list">
                <li>Perang</li>
                <li>Efek Nuklir</li>
                <li>
                  Tindakan Melawan Hukum, Tindakan Penyitaan, Penahanan,
                  Pemusnahan oleh Aparat Bea Cukai atau Penguasa lainnya
                </li>
                <li>Larangan ataupun Peraturan Pemerintah</li>
                <li>Aktivitas atau Olahraga Ekstrim</li>
                <li>Kehamilan dan Melahirkan</li>
                <li>Bunuh Diri atau tindakan Melukai Diri Sendiri</li>
                <li>Hilang Tanpa Diketahui Sebabnya</li>
              </ul>
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

export default ProductsTravel;
