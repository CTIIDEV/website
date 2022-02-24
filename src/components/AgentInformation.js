import React from "react";
import {
  Button,
  Form,
  Select,
  Input,
  Upload,
  message,
  Checkbox,
  Radio,
  Row,
  Col,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const AgentInformation = () => {
  return (
    <>
      <Form.Item
        name="infoPlacement"
        label="Penempatan Kantor"
        rules={[{ required: true, message: "Please select an option." }]}
      >
        <Select>
          <Select.Option value="BDDA">Head Office (BDD A)</Select.Option>
          <Select.Option value="BDDB">Head Office (BDD B)</Select.Option>
          <Select.Option value="BDG">Bandung</Select.Option>
          <Select.Option value="TNG">BSD (Tangerang)</Select.Option>
          <Select.Option value="JKTKEDOYA">Kedoya</Select.Option>
          <Select.Option value="JKTKOTA">Kota (Jakarta)</Select.Option>
          <Select.Option value="MDN">Medan</Select.Option>
          <Select.Option value="SMG">Semarang</Select.Option>
          <Select.Option value="SBY">Surabaya</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="infoTargetProperty" label="Target Produksi Properti">
        <InputNumber
          style={{ width: "100%" }}
          formatter={(value) =>
            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Form.Item name="infoTargetMV" label="Target Produksi MV">
        <InputNumber
          style={{ width: "100%" }}
          formatter={(value) =>
            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Form.Item
        name="infoTargetMarineCargo"
        label="Target Produksi Marine Cargo"
      >
        <InputNumber
          style={{ width: "100%" }}
          formatter={(value) =>
            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Form.Item
        name="infoTargetConstruction"
        label="Target Produksi Konstruksi"
      >
        <InputNumber
          style={{ width: "100%" }}
          formatter={(value) =>
            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Form.Item name="infoTargetOther" label="Target Produksi Aneka">
        <InputNumber
          style={{ width: "100%" }}
          formatter={(value) =>
            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, "")}
        />
      </Form.Item>
      <Row className="row-uploads">
        <Col className="row-uploads__col">
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoPicture"
              label="Unggah Foto"
              rules={[{ required: true, message: "Upload required file." }]}
            >
              <Upload
                className="upload-image"
                name="infoPicture"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-image__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoKTP"
              label="Unggah KTP"
              rules={[{ required: true, message: "Upload required file." }]}
            >
              <Upload
                className="upload-ktp"
                name="infoKTP"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-ktp__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoAAUI"
              label="Unggah Sertifikat AAUI"
              rules={[{ required: true, message: "Upload required file." }]}
            >
              <Upload
                className="upload-ktp"
                name="infoAAUI"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-ktp__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
        </Col>
        <Col className="row-uploads__col">
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoNPWP"
              label="Unggah NPWP"
              rules={[
                { required: true, message: "Please accept the agreement." },
              ]}
            >
              <Upload
                className="upload-ktp"
                name="infoNPWP"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-ktp__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoBankBook"
              label="Unggah Buku Bank"
              rules={[
                { required: true, message: "Please accept the agreement." },
              ]}
            >
              <Upload
                className="upload-ktp"
                name="infoBankBook"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-ktp__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
          <Row className="row-uploads__col-upload">
            <Form.Item
              name="infoOther"
              label="Unggah Sertifikat Lainnya"
              rules={[
                { required: true, message: "Please accept the agreement." },
              ]}
            >
              <Upload
                className="upload-ktp"
                name="infoOther"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button
                  className="upload-ktp__button"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </Row>
        </Col>
      </Row>
      <Row className="row-agreements">
        <Col className="row-agreements__col">
          <Form.Item
            name="agreeCompleteDocument"
            valuePropName="checked"
            label="Agen bersedia melengkapi dokumen pendukung dalam rangka registrasi keagenan PT China Taiping Insurance Indonesia"
            rules={[
              { required: true, message: "Please accept the agreement." },
            ]}
          >
            <Checkbox>Ya, saya bersedia.</Checkbox>
          </Form.Item>
        </Col>
        <Col className="row-agreements__col">
          <Form.Item
            name="agreeRegulation"
            valuePropName="checked"
            label="Agen bersedia mematuhi seluruh ketentuan kegaenan PT China Taiping Insurance Indonesia"
            rules={[
              { required: true, message: "Please accept the agreement." },
            ]}
          >
            <Checkbox>Ya, saya bersedia.</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row className="row-agreements">
        <Col className="row-agreements__col">
          <Form.Item
            name="agreeCreditPeriod"
            valuePropName="checked"
            label="Agen diberikan Credit Period 30 Hari"
            rules={[
              { required: true, message: "Please accept the agreement." },
            ]}
          >
            <Checkbox>Ya, saya bersedia.</Checkbox>
          </Form.Item>
        </Col>
        <Col className="row-agreements__col">
          <Form.Item
            name="agreeValidInformation"
            valuePropName="checked"
            label="Informasi yang disampaikan merupakan informasi yang benar dan valid"
            rules={[
              { required: true, message: "Please accept the agreement." },
            ]}
          >
            <Checkbox>Ya, saya bersedia.</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="availabilityAgent"
        label="Kesediaan Menjadi Agen PT China Taiping Insurance Indonesia"
        rules={[{ required: true, message: "Please select an option." }]}
      >
        <Radio.Group onChange={(e) => {}}>
          <Radio
            value={
              "Agen belum punya kartu AAUI dan akan mengikuti sertifikasi keagenan untuk PT China Taiping Insurance Indonesia pada kesempatan pertama"
            }
          >
            Agen belum mempunyai Kartu AAUI dan akan mengikuti sertifikasi
            keagenan untuk PT China Taiping Insurance Indonesia pada kesempatan
            pertama
          </Radio>
          <Radio
            value={
              "Agen sudah mempunyai Kartu AAUI untuk asuransi lain dan bersedia menjadi Agen PT China Taiping Insurance Indonesia pada periode keagenan selanjutnya"
            }
          >
            Agen sudah mempunyai Kartu AAUI untuk Asuransi lain dan bersedia
            menjadi Agen PT China Taiping Insurance Indonesia pada periode
            keagenan selanjutnya
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default AgentInformation;
