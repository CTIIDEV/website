import React, { useState } from "react";
import { Button, Grid, Steps } from "antd";

const StepPanel = (props) => {
  const { Step } = Steps;
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  console.log(props.steps[current].step + " ");

  return (
    <>
      <Steps
        responsive={true}
        labelPlacement={md ? "vertical" : "horizontal"}
        current={current}
        // type="navigation"
      >
        {props.steps.map((item) => (
          <Step
            key={item.title}
            title={item.title}
            // subTitle={item.title}
          />
        ))}
      </Steps>
      {props.steps.map((item) => (
        <div
          className={`steps-content ${item.step !== current + 1 && "hidden"}`}
        >
          {item.content}
        </div>
      ))}
      <div className="steps-action">
        {current === props.steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {current < props.steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StepPanel;
