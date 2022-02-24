import React from "react";
import { Table, Space, Typography, Button } from "antd";

import { policy } from "../../data";

import "../../css/About.css";

const Policy = () => {
  const { Column } = Table;
  const { Title } = Typography;
  return (
    <div className="section-wrapper about-policy">
      <div className="section-top">
        <Title className="top-title" level={1}>
          Policy
        </Title>
        <i className="top-border" />
      </div>
      <div className="section-content">
        <Table
          className="content__table"
          bordered
          dataSource={policy}
          pagination={false}
        >
          <Column
            className="table__col-item"
            title="Jenis Polis"
            dataIndex="policy"
            key="policy"
          />
          <Column
            className="table__col-item"
            title="Baca Polis"
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

export default Policy;
