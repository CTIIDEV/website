import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  TimePicker,
  Typography,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import MotorVehicleClaimForm from "../../components/MotorVehicleClaimForm";

import "../../css/Agency.css";
import StepPanel from "../../components/StepPanel copy";
import MVDamageVehicle from "../../components/MVDamageVehicle";
import MVDamageRemarks from "../../components/MVDamageRemarks";

const MVClaim = () => {
  const [status, setStatus] = useState("Submit");
  const [form] = Form.useForm();
  const { Option } = Select;

  const MvPolicyInfo = () => {
    return (
      <>
        <Form.Item
          name="policyId"
          label="No. Polis"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="policyInfo"
          label="Pertanggungan lain yang dimiliki"
          help="Jika memiliki pertanggungan yang lain."
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="insuredName"
          label="Nama Tertanggung"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="insuredAddress"
          label="Alamat Tertanggung"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea type="text" />
        </Form.Item>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="insuredPhoneNum"
              label="No. Telepon Rumah/Kantor"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="insuredMobileNum"
              label="No. Telepon Genggam"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="insuredEmail"
          label="Email"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input type="email" />
        </Form.Item>
      </>
    );
  };

  const MvVehicleInfo = () => {
    return (
      <>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="carBrand"
              label="Merk Kendaraan"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="carYear"
              label="Tahun Pembuatan"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="carPurpose"
          label="Ketika kecelakaan terjadi kendaraan sedang digunakan untuk keperluan"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea type="text" />
        </Form.Item>
        <Form.Item
          name="carUsagePermission"
          label="Apakah kendaraan dikemudikan dengan sepengetahuan dan seizin tertanggung"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea type="text" />
        </Form.Item>
      </>
    );
  };

  const MvDriverInfo = () => {
    return (
      <>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="driverName"
              label="Nama Pengemudi"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="driverAge"
              label="Umur Pengemudi"
              rules={[{ required: true, message: "Please fill in the field." }]}
            >
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="driverAddress"
          label="Alamat Pengemudi"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea type="text" />
        </Form.Item>
        <Form.Item
          name="driverSIM"
          label="No. SIM Pengemudi"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="driverSIMHistory"
          label="Apakah SIM tersebut pernah ditahan? jika pernah sebutkan sebab-sebabnya"
        >
          <Input.TextArea type="text" />
        </Form.Item>
      </>
    );
  };

  const MvAccidentInfo = () => {
    return (
      <>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentDate"
              label="Tanggal Kecelekaan"
              rules={[{ required: true, message: "Please select the date." }]}
            >
              <DatePicker name="accidentDate" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentReportDate"
              label="Tanggal Melapor"
              rules={[{ required: true, message: "Please select the date." }]}
            >
              <DatePicker name="accidentReportDate" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentTime"
              label="Waktu Kecelakaan"
              rules={[{ required: true, message: "Please select the time." }]}
            >
              <TimePicker format={"HH:mm"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="accidentLocation"
          label="Tempat Kejadian"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="accidentSpeed"
          label="Kecepatan pada saat itu"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accidentRightLane"
          label="Apakah sedang berada pada jalur yang benar"
          rules={[
            { required: true, message: "Please pick one of the options." },
          ]}
        >
          <Radio.Group name="radioRightLane">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="accidentHighway"
          label="Apakah kendaraan anda berada di jalan raya"
          rules={[
            { required: true, message: "Please pick one of the options." },
          ]}
        >
          <Radio.Group name="radioHighway">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="accidentExplaination"
          label="Jelaskan dengan tepat kejadiannya (jika anda beranggapan bahwa pihak lainnya yang bersalah, harap beri alasan)"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
      </>
    );
  };

  const MvAccidentWitness = () => {
    return (
      <>
        <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentDate"
              label="Tanggal Kecelekaan"
              rules={[{ required: true, message: "Please select the date." }]}
            >
              <DatePicker name="accidentDate" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentReportDate"
              label="Tanggal Melapor"
              rules={[{ required: true, message: "Please select the date." }]}
            >
              <DatePicker name="accidentReportDate" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} style={{ marginBottom: "24px" }}>
            <Form.Item
              name="accidentTime"
              label="Waktu Kecelakaan"
              rules={[{ required: true, message: "Please select the time." }]}
            >
              <TimePicker format={"HH:mm"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="accidentLocation"
          label="Tempat Kejadian"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="accidentSpeed"
          label="Kecepatan pada saat itu"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accidentRightLane"
          label="Apakah sedang berada pada jalur yang benar"
          rules={[
            { required: true, message: "Please pick one of the options." },
          ]}
        >
          <Radio.Group name="radioRightLane">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="accidentHighway"
          label="Apakah kendaraan anda berada di jalan raya"
          rules={[
            { required: true, message: "Please pick one of the options." },
          ]}
        >
          <Radio.Group name="radioHighway">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="accidentExplaination"
          label="Jelaskan dengan tepat kejadiannya (jika anda beranggapan bahwa pihak lainnya yang bersalah, harap beri alasan)"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
      </>
    );
  };

  const MvThirdParty = () => {
    return (
      <>
        <Form.Item
          name="tpInformation"
          label="Sebutkan nama dan alamat dari pemilik/pengemudi dari kendaraan bertabrakan dan No. polisinya"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="tpDamage"
          label="Apakah ada luka-luka atau kerusakan yang diderita? Jika ada harap diberi keterangan lengkap juga nama dan alamat"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="tpClaim"
          label="Apakah pihak lainnya menuntut rugi kepada anda? Jika demikian berapa jumlahnya"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
      </>
    );
  };

  const MvDamageVehicle = () => {
    return (
      <>
        <Form.Item
          name="dmgAssessment"
          label="Sebutkan besarnya kerusakan kendaraan anda (menurut penilaian anda)"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="dmgAppointment"
          label="Kapan kendaraan anda dapat kami periksa"
          rules={[{ required: true, message: "Please select the date." }]}
        >
          <DatePicker name="dmgAppointment" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="dmgWorkshop"
          label="Sebutkan besarnya kerusakan kendaraan anda (menurut penilaian anda)"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Select>
            <Option value="workshop1">Workshop 1</Option>
            <Option value="workshop2">Workshop 2</Option>
            <Option value="workshop3">Workshop 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dmgEstimation"
          label="Perkiraan Biaya Perbaikan"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="remarksDetail"
          label="Catatan Kerusakan Pada Kendaran"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="remarksImage"
          label="Upload Foto Kondisi Kendaraan"
          rules={[{ required: true, message: "Please fill in the field." }]}
        >
          {/* <Input type="file" onChange={handleUpload} /> */}
          <Upload
            className="section-upload__upload"
            name="infoPicture"
            maxCount={1}
            multiple={false}
            progress={{
              strokeColor: {
                "0%": "#108ee9",
                "100%": "#87d068",
              },
            }}
            beforeUpload={() => false}
          >
            <Button
              className="section-upload__upload__button"
              type="primary"
              icon={<UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>
      </>
    );
  };

  const steps = [
    {
      step: 1,
      title: "Informasi Asuransi",
      content: <MvPolicyInfo />,
    },
    {
      step: 2,
      title: "Informasi Kendaraan",
      content: <MvVehicleInfo />,
    },
    {
      step: 3,
      title: "Informasi Pengemudi",
      content: <MvDriverInfo />,
    },
    {
      step: 4,
      title: "Informasi Kecelakaan",
      content: <MvAccidentInfo />,
    },
    {
      step: 5,
      title: "Informasi Saksi-Saksi",
      content: <MvAccidentWitness />,
    },
    {
      step: 6,
      title: "Informasi Pihak Ketiga",
      content: <MvThirdParty />,
    },
    {
      step: 7,
      title: "Informasi Kerusakan",
      content: <MvDamageVehicle />,
    },
  ];

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="section-wrapper claim-motor-vehicle">
      <div className="section-top">
        <Typography.Title className="top-title" level={1}>
          Form Pengajuan Klaim Kendaraan <br />
          PT. China Taiping Insurance Indonesia
        </Typography.Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => handleSubmit(values)}
        >
          <StepPanel steps={steps} />
        </Form>
        {/* <Form
          className="content__form-claim"
          layout="vertical"
          form={form}
          onFinish={(values) => handleSubmit(values)}
        >
          <Form.Item
            label="No. Polis"
            name="claimPolicyNo"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimPolicyNo" />
          </Form.Item>
          <Form.Item
            label="No. Polis Lain"
            name="claimOtherPolicyNo"
            extra="Sebutkan pertanggungan lain yang dimilki."
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimOtherPolicyNo" />
          </Form.Item>
          <Form.Item
            label="Nama Tertanggung"
            name="claimInsuredName"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimInsuredName" />
          </Form.Item>
          <Form.Item
            label="Alamat Tertanggung"
            name="claimInsuredAddress"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input.TextArea name="claimInsuredAddress" />
          </Form.Item>
          <Form.Item
            label="Email Tertanggung"
            name="claimInsuredEmail"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimInsuredEmail" />
          </Form.Item>
          <Form.Item
            label="No. Telepon Pribadi Tertanggung"
            name="claimInsuredPhoneNum"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimInsuredPhoneNum" />
          </Form.Item>
          <Form.Item
            label="No. Telepon Rumah/Kantor Tertanggung"
            name="claimInsuredPhoneNumOther"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimInsuredPhoneNum" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {status}
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    </div>
  );
};

export default MVClaim;
