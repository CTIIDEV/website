import React from "react";
import { Form, Select, Input, DatePicker, Row, Col, Checkbox } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const AgentData = () => {
  return (
    <>
      <Row gutter={{ xs: 12, sm: 24, md: 12, lg: 32 }}>
        <Col xs={6} sm={6} md={6} style={{ marginBottom: "24px" }}>
          <Form.Item
            name="agentTitle"
            label="Titel Agen"
            rules={[{ required: true, message: "Please fill in the field." }]}
          >
            <Select>
              <Select.Option value="Mr">Mr</Select.Option>
              <Select.Option value="Mrs">Mrs</Select.Option>
              <Select.Option value="Ms">Ms</Select.Option>
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

export default AgentData;
