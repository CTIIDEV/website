import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  Input,
  message as alert,
  Select,
  Typography,
} from "antd";
import contactFormService from "../../services/contactForm.service";

import "../../css/ContactForm.css";

export const FormContact = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = (values) => {
    const { title, firstname, lastname, phonenumber, email, message } = values;
    let data = {
      title,
      firstname,
      lastname,
      phonenumber,
      email,
      message,
    };
    setStatus("Sending ...");

    contactFormService
      .create(data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert.success(response.data.message);
          form.resetFields();
          setStatus("Submit");
        }
      })
      .catch((error) => {
        console.log(error);
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
      </div>
      <div className="section-content">
        <Form
          className="content__form-contact"
          layout="vertical"
          form={form}
          onFinish={(values) => handleSubmit(values)}
        >
          <Form.Item label="Title" name="title" required>
            <Select id="title">
              <Select.Option value=""></Select.Option>
              <Select.Option value="Mr">Mr.</Select.Option>
              <Select.Option value="Mrs">Mrs.</Select.Option>
              <Select.Option value="Ms">Ms.</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Firstname" name="firstname" required>
            <Input name="firstName" />
          </Form.Item>
          <Form.Item label="Lastname" name="lastname" required>
            <Input name="lastName" />
          </Form.Item>
          <Form.Item label="Phone Number" name="phonenumber" required>
            <Input name="phoneNumber" />
          </Form.Item>
          <Form.Item label="Email" name="email" required>
            <Input name="email" />
          </Form.Item>
          <Form.Item label="Message" name="message" required>
            <Input.TextArea name="message" />
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
