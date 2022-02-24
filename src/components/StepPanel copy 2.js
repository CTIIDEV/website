import React, { useState } from "react";
import { Button, Steps } from "antd";

const StepPanel = (props) => {
  const { Step } = Steps;
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  const prev = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  };

  return (
    <>
      <Steps direction="horizontal" current={activeStep}>
        {props.steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {props.steps.map((item) => (
        <div
          className={`steps-content ${
            item.step !== activeStep + 1 && "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}
      <div className="steps-action">
        {activeStep > 0 && (
          <Button style={{ marginRight: "8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {activeStep < props.steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {activeStep === props.steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </div>
    </>
  );
};

export default StepPanel;
