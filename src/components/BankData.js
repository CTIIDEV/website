import React from "react";
import { Col, Form, Input, Row, Select } from "antd";

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
            label="Nama Atas No. Rekening"
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

export default BankData;
