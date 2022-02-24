import React from 'react';
import { Typography } from 'antd';

const OrganizationalChart = () => {
    const { Title } = Typography;
    return (
        <div className="page-wrapper section-organizational-chart">
            <div className="text-wrapper">
                <Title level={2}>This is Organizational Chart page</Title>
            </div>
        </div>
    )
}

export default OrganizationalChart;