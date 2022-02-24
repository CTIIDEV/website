import React from "react";
import { Table, Space, Typography, Button } from "antd";
import "../../css/About.css";

import { financialReport } from "../../data";

const FinancialReport = () => {
  const { Column } = Table;
  const { Title } = Typography;
  return (
    <div className="section-wrapper about-financial-report">
      <div className="section-top">
        <Title className="top-title" level={1}>
          Financial Report
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Table
          className="content__table"
          bordered
          dataSource={financialReport}
          pagination={{
            pageSize: 10,
            responsive: true,
          }}
        >
          <Column
            className="table__col-item"
            title="Tahun"
            dataIndex="year"
            key="year"
            defaultSortOrder="descend"
            sorter={(a, b) => a.year - b.year}
          />
          <Column title="Kuarter" dataIndex="quarter" key="quarter" />
          <Column
            className="table__col-item"
            title="Link Laporan"
            dataIndex="link"
            key="link"
            render={(text, link) => (
              <Space size="middle">
                <a href={link.link} target="_blank">
                  <Button className="col-item__button" type="primary">
                    View
                  </Button>
                </a>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default FinancialReport;

// REACT ICONS
