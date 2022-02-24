import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, message, Select, Typography } from "antd";

import "../../css/ContactForm.css";

export const FormContact = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (values) => {
    const {
      contactTitle,
      contactName,
      contactEmail,
      contactPhoneNumber,
      contactMessage,
    } = values;
    console.log(values);

    setStatus("Sending ...");

    await axios
      .post("http://10.247.64.45:10000/contacts/create-contact", {
        contactTitle,
        contactName,
        contactEmail,
        contactPhoneNumber,
        contactMessage,
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
    <div className="section-wrapper form-contact" id="contactForm">
      <div className="section-top">
        <Typography.Title className="top-title" level={1}>
          Got questions?
        </Typography.Title>
        <Typography.Title className="top-title" level={3}>
          Fill in the form and send us a message
        </Typography.Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Form
          className="content__form-contact"
          layout="vertical"
          form={form}
          onFinish={(values) => handleSubmit(values)}
        >
          <Form.Item
            label="Title"
            name="contactTitle"
            rules={[{ required: true, message: "Please select title." }]}
          >
            <Select id="contactTitle">
              <Select.Option value="Mr">Mr.</Select.Option>
              <Select.Option value="Mrs">Mrs.</Select.Option>
              <Select.Option value="Ms">Ms.</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Name"
            name="contactName"
            rules={[
              { required: true, message: "Please fill the input field." },
            ]}
          >
            <Input name="contactName" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="contactPhoneNumber"
            rules={[
              { required: true, message: "Please fill the input field." },
            ]}
          >
            <Input name="contactPhoneNumber" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="contactEmail"
            rules={[
              { required: true, message: "Please fill the input field." },
            ]}
          >
            <Input name="contactEmail" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="contactMessage"
            rules={[
              { required: true, message: "Please fill the input field." },
            ]}
          >
            <Input.TextArea name="contactMessage" />
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
