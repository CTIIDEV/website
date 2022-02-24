import React from "react";
import { PageHeader, Form, Checkbox, Button, Radio } from "antd";
import StepPanel from "./StepPanel copy";

import AgentData from "./AgentData";
import BankData from "./BankData";
import AgentInformation from "./AgentInformation";
import axios from "axios";
import { useHistory } from "react-router-dom";

function StepForm() {
  const [stepForm] = Form.useForm();
  const history = useHistory();
  const onFinish = (fieldsValue) => {
    console.log(fieldsValue);
    // axios
    //   .post("http://localhost:3001/api/generalagents", fieldsValue, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     alert("DONE");
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };
  const steps = [
    {
      title: "Data Agen",
      content: <AgentData />,
    },
    {
      title: "Data Bank Agen",
      content: <BankData />,
    },
    // {
    //   title: "Informasi Agen",
    //   content: <AgentInformation />,
    // },
  ];

  return (
    <Form
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 8 }}
      layout="vertical"
      form={stepForm}
      onFinish={onFinish}
    >
      <StepPanel steps={steps} />
    </Form>
  );
}

export default StepForm;
