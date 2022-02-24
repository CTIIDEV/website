import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page your are visiting does not exist."
      extra={
        <Button type="primary" onClick={handleReturnHome}>
          Return Home
        </Button>
      }
    />
  );
};
