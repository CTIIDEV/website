import React from "react";
import { Typography } from "antd";

import MotorVehicleClaimForm from "../../components/MotorVehicleClaimForm";

import "../../css/Agency.css";

const MVClaim = () => {
  const { Title } = Typography;
  return (
    <div className="section-wrapper section-motor-vehicle-form">
      <div className="motor-vehicle-form-container">
        <div className="text-wrapper">
          <Title level={2}>
            Form Pengajuan Klaim Kendaraan <br />
            PT. China Taiping Insurance Indonesia
          </Title>
          <i className="top-border" />
        </div>
        <MotorVehicleClaimForm />
      </div>
    </div>
  );
};

export default MVClaim;
