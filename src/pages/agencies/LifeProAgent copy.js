import { Typography } from "antd";

import "../../css/Agency.css";
import AgentLPForm from "../../components/AgentLPForm";

const LifeProAgent = () => {
  const { Title } = Typography;
  return (
    <div className="section-wrapper agent-lifepro-agent">
      <div className="section-top">
        <Title className="top-title" level={2}>
          Form Pengajuan Keagenan Asuransi LifePro
        </Title>
        <Title className="top-subtitle" level={4}>
          PT. China Taiping Insurance Indonesia
        </Title>
        <i className="top-border" />
      </div>
      <AgentLPForm />
    </div>
  );
};

export default LifeProAgent;
