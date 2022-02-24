import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Form,
  Input,
  Button,
  DatePicker,
  message,
  Row,
  Col,
} from "antd";

import "../../css/Claims.css";

const ReportClaim = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (values) => {
    const {
      claimPolicyNo,
      claimInsuredName,
      claimInsuredEmail,
      claimInsuredPhoneNum,
      claimDateOccurance,
      claimDesc,
    } = values;
    console.log(values);

    setStatus("Sending ...");

    await axios
      .post("http://10.247.64.45:10000/claim-reports/create-claim-report", {
        claimPolicyNo,
        claimInsuredName,
        claimInsuredEmail,
        claimInsuredPhoneNum,
        claimDateOccurance,
        claimDesc,
      })
      .then((result) => {
        if (result.status === 200) {
          message.success(result.data.message);
          form.resetFields();
          setStatus("Submit");
        }
      })
      .catch((error) => {
        if (error.response) {
          message.error(
            "[" + error.response.status + "] - " + error.response.data.message
          );
        }
      });
  };

  return (
    <div className="section-wrapper claim-report">
      <div className="section-top">
        <Typography.Title className="top-title" level={1}>
          Report Claim Form
        </Typography.Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Form
          className="content__form-claim"
          layout="vertical"
          form={form}
          onFinish={(values) => handleSubmit(values)}
        >
          <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
            <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
              <Form.Item
                label="No. Polis"
                name="claimPolicyNo"
                rules={[
                  { required: true, message: "Please fill in the field." },
                ]}
              >
                <Input name="claimPolicyNo" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} style={{ marginBottom: "24px" }}>
              <Form.Item
                label="Tanggal Kejadian"
                name="claimDateOccurance"
                rules={[{ required: true, message: "Please select the date." }]}
              >
                <DatePicker
                  name="claimDateOccurance"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Nama Tertanggung"
            name="claimInsuredName"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input name="claimInsuredName" />
          </Form.Item>
          <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
            <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
              <Form.Item
                label="Email Tertanggung"
                name="claimInsuredEmail"
                rules={[
                  { required: true, message: "Please fill in the field." },
                ]}
              >
                <Input name="claimInsuredEmail" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} style={{ marginBottom: "24px" }}>
              <Form.Item
                label="No. Telepon Tertanggung"
                name="claimInsuredPhoneNum"
                rules={[
                  { required: true, message: "Please fill in the field." },
                ]}
              >
                <Input name="claimInsuredPhoneNum" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Deskripsi Klaim"
            name="claimDesc"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Input.TextArea name="claimDesc" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {status}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ReportClaim;
