import React, { Component } from 'react';
import { Typography, Form, Input, Button } from 'antd';
import ReportClaimDataService from '../../services/reportClaim.service';
import "../../css/Contact.css";

const { Title, Text } = Typography;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const formTailLayout = {
  wrapperCol: { offset: 8 },
};
class ReportClaim extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: null,
      polisNo: "",
      holderName: "",
      holderEmail: "",
      holderPhone: "",
      date: "",
      claimDesc: "",
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = () => {
    var data = {
      polisNo: this.state.polisNo,
      holderName: this.state.holderName,
      holderEmail: this.state.holderEmail,
      holderPhone: this.state.holderPhone,
      date: this.state.date,
      claimDesc: this.state.claimDesc
    }
    console.log(data);
    ReportClaimDataService.create(data)
    .then(response => {
      var _date= response.data.date;
      this.setState({
        polisNo: response.data.polisNo,
        holderName: response.data.holderName,
        holderEmail: response.data.holderEmail,
        holderPhone: response.data.holderPhone,
        date: response.data.date,
        claimDesc: response.data.claimDesc,
      });
      console.log(response.data)
    })
    .catch(e =>{
      console.log(e);
    })
  }
  render() {
    return (
      <div className="page-wrapper section-report-claim">
        <div className="report-claim-container">
          <div className="text-wrapper">
            <Title level={2}>Report Claim</Title>
          </div>
          <Form
            className="form-contact"
          >
            <Form.Item
              label="No. Polis"
              {...formItemLayout}
              required
            >
              <Input
                name="polisNo"
                value={this.state.polisNo}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Nama Tertanggung"
              {...formItemLayout}
              required
            >
              <Input
                name="holderName"
                value={this.state.holderName}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Email Tertanggung"
              {...formItemLayout}
              required
            >
              <Input
                type="email"
                name="holderEmail"
                value={this.state.holderEmail}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="No. Telepon Tertanggung"
              {...formItemLayout}
              required
            >
              <Input
                type="number"
                name="holderPhone"
                value={this.state.holderPhone}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Tanggal Kejadian"
              {...formItemLayout}
            >
              <Input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Deskripsi Klaim"
              {...formItemLayout}
              required
            >
              <Input.TextArea
                type="text"
                name="claimDesc"
                value={this.state.claimDesc}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              {...formTailLayout}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default ReportClaim;