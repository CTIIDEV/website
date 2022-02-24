import { useState } from 'react';
import { Form } from 'antd';

import AgentData from './AgentData';
import AgentLPInformation from './AgentLPInformation';
import BankData from './BankData';
import StepPanel from "./StepPanel";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AgentLPForm = () => {
  const [agentLPForm] = Form.useForm();
  const history = useHistory();
  const onFinish = (fieldsvalue) => {
    console.log(fieldsvalue)
    axios.post("http://localhost:3001/api/lpagents", fieldsvalue, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      console.log("Done")
      history.push("/")
    })
    .catch((error) => {
      alert(error);
    })
    // localhost:3001/api/lpagents
    // console.log("Form Data: " + fieldsvalue)
  }

  const steps = [
    {
      step: 1,
      title: "Data Agen",
      content: <AgentData />
    },
    {
      step: 2,
      title: "Data Bank Agen",
      content: <BankData />
    },
    {
      step: 3,
      title: "Data Agen",
      content: <AgentLPInformation />
    },
  ]

  return (
    <Form
      layout="vertical"
      form={agentLPForm}
      onFinish={onFinish}
    >
      <StepPanel steps={steps} />
    </Form>
  )
}

export default AgentLPForm;