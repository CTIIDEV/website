import React, { Component } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import ContactFormService from "../services/contactForm.service";
import "../css/ContactForm.css";
const { Title } = Typography;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const formTailLayout = {
  wrapperCol: { offset: 8 },
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: null,
      title: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
      button: "Submit",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    var data = {
      title: this.state.title,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(data);

    this.setState({ button: "Sending ..." });

    ContactFormService.create(data)
      .then((response) => {
        this.setState({
          title: response.data.title,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          email: response.data.email,
          message: response.data.message,
        });
        console.log(response);
        // if (response.data === "Message Sent") {
        //   message.success(response.data);
        //   this.setState({ button: "Submit" });
        // }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="page-wrapper-contact-form" id="contactForm">
        <div className="contact-form">
          <div className="text-wrapper">
            <Title level={2}>Got questions?</Title>
            <Title level={4}>Fill in the form and send us a message</Title>
          </div>
          <div className="form-wrapper">
            <Form className="form-contact">
              <Form.Item {...formItemLayout} label="Title" required>
                <select
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                >
                  <option value=""></option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="ms">Ms.</option>
                </select>
              </Form.Item>
              <Form.Item {...formItemLayout} label="Firstname" required>
                <Input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Lastname" required>
                <Input
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Phone Number" required>
                <Input
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Email" required>
                <Input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Message" required>
                <Input.TextArea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item {...formTailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit}
                >
                  {this.state.button}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
