import axios from "axios";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";

import StepPanel from "../../components/StepPanel";
import { UploadOutlined } from "@ant-design/icons";

import "../../css/Agency.css";

const GeneralAgent = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;

  const AgentData = () => {
    return (
      <>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={6} sm={6} md={6} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentTitle"
              label="Titel Agen"
              rule={[
                {
                  required: true,
                  message: "Please select one of the options.",
                },
              ]}
            >
              <Select name="agentTitle">
                <Select.Option value="Mr">Mr.</Select.Option>
                <Select.Option value="Mrs">Mrs.</Select.Option>
                <Select.Option value="Ms">Ms.</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={18} sm={18} md={18} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentName"
              label="Nama Agen"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentEmail"
              label="Email Agen"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentPhoneNum"
              label="No. Telepon Agen"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="agentAddress"
          label="Alamat Agen"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea cols={3} />
        </Form.Item>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentKTP"
              label="No. KTP Agen"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="agentNPWP"
              label="No. NPWP Agen"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="agentAAUI"
          label="No. AAUI Agen"
          extra="Isi nomor AAUI jika memiliki sertifikasi AAUI."
          // tooltip={{
          //   title: "Tooltip with customize icon",
          //   icon: <InfoCircleOutlined />,
          // }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="agentAAUITarget"
          label="Target Sertifikasi AAUI"
          extra="Pilih bulan untuk target sertifikasi AAUI jika tidak memiliki sertifikasi AAUI."
        >
          <Input type="month" />
        </Form.Item>
      </>
    );
  };

  const BankData = () => {
    return (
      <>
        <Form.Item
          name="bankName"
          label="Nama Bank"
          rules={[
            { required: true, message: "Please select one of the options." },
          ]}
        >
          <Select>
            <Select.Option value="Bank A">Bank A</Select.Option>
            <Select.Option value="Bank B">Bank B</Select.Option>
            <Select.Option value="Bank C">Bank C</Select.Option>
          </Select>
        </Form.Item>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="bankAccName"
              label="Nama No. Rekening"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="bankAccId"
              label="No. Rekening"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </>
    );
  };

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
          <Radio.Group>
            <Radio
              value={
                "Agen belum punya kartu AAUI dan akan mengikuti sertifikasi keagenan untuk PT China Taiping Insurance Indonesia pada kesempatan pertama"
              }
            >
              Agen belum mempunyai Kartu AAUI dan akan mengikuti sertifikasi
              keagenan untuk PT China Taiping Insurance Indonesia pada
              kesempatan pertama
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

  const steps = [
    {
      step: 1,
      title: "Data Agen",
      content: <AgentData />,
    },
    {
      step: 2,
      title: "Informasi Bank Agen",
      content: <BankData />,
    },
    {
      step: 3,
      title: "Informasi Agen",
      content: <AgentInformation />,
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
    let formData = new FormData();

    formData.append("agentType", "general");
    formData.append("agentTitle", values.agentTitle);
    formData.append("agentName", values.agentName);
    formData.append("agentEmail", values.agentEmail);
    formData.append("agentPhoneNum", values.agentPhoneNum);
    formData.append("agentAddress", values.agentAddress);
    formData.append("agentKTP", values.agentKTP);
    formData.append("agentNPWP", values.agentNPWP);
    formData.append("agentAAUI", values.agentAAUI);
    formData.append("agentAAUITarget", values.agentAAUITarget);
    formData.append("bankName", values.bankName);
    formData.append("bankAccName", values.bankAccName);
    formData.append("bankAccId", values.bankAccId);
    formData.append("infoPlacement", values.infoPlacement);
    formData.append("infoTargetProperty", values.infoTargetProperty);
    formData.append("infoTargetMV", values.infoTargetMV);
    formData.append("infoTargetMarineCargo", values.infoTargetMarineCargo);
    formData.append("infoTargetConstruction", values.infoTargetConstruction);
    formData.append("infoTargetOther", values.infoTargetOther);
    formData.append("infoPicture", values.infoPicture.file);
    formData.append("infoKTP", values.infoKTP.file);
    formData.append("infoAAUI", values.infoAAUI.file);
    formData.append("infoNPWP", values.infoNPWP.file);
    formData.append("infoBankBook", values.infoBankBook.file);
    formData.append("infoOther", values.infoOther.file);
    formData.append("agreeCompleteDocument", values.agreeCompleteDocument);
    formData.append("agreeRegulation", values.agreeRegulation);
    formData.append("agreeCreditPeriod", values.agreeCreditPeriod);
    formData.append("agreeValidInformation", values.agreeValidInformation);
    formData.append("availabilityAgent", values.availabilityAgent);

    axios
      .post(
        "http://localhost:10001/general-agents/create-agent-general",
        formData
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          message.success("Form submitted.");
        }
        form.resetFields();
        /**
         * Return to homepage
         */
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="section-wrapper agent-general-agent">
      <div className="section-top">
        <Title className="top-title" level={2}>
          Form Pengajuan Keagenan Asuransi General
        </Title>
        <Title className="top-subtitle" level={4}>
          PT. China Taiping Insurance Indonesia
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            infoTargetProperty: 0,
            infoTargetMV: 0,
            infoTargetMarineCargo: 0,
            infoTargetConstruction: 0,
            infoTargetOther: 0,
          }}
          onFinish={handleSubmit}
        >
          <StepPanel steps={steps} />
        </Form>
      </div>
    </div>
  );
};

export default GeneralAgent;
