import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { Grid, Menu, Layout, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import logo from "../assets/cntaiping-logo.png";
// import { header } from "../data";
import "../css/PageHeader.css";

const PageHeader = () => {
  const { useBreakpoint } = Grid;
  const [visible, setVisible] = useState(false);
  const { md } = useBreakpoint();
  // let history = useHistory();
  // const handlePage = (link) => {
  //   history.push(link);
  // };

  const handleShowDrawer = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  return (
    <nav className="layout-header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="header-content">
        <div className="content-menu">
          <Menu className="menu-menu" mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.SubMenu title="Products">
              <Menu.Item key="product-personal-accident">
                <a href="/products/personal-accident">Personal Accident</a>
              </Menu.Item>
              <Menu.Item key="product-housing-insurance">
                <a href="/products/housing">Housing Insurance</a>
              </Menu.Item>
              <Menu.Item key="product-motor-vehicle">
                <a href="/products/motor-vehicle">Motor Vehicle</a>
              </Menu.Item>
              <Menu.Item key="product-travel-insurance">
                <a href="/products/travel">Travel Insurance</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Claim">
              <Menu.Item key="claim-procedure">
                <a href="/claim/procedure">Claiming Procedure</a>
              </Menu.Item>
              <Menu.Item key="claim-report">
                <a href="/claim/report-form">Report Claim Form</a>
              </Menu.Item>
              <Menu.Item key="claim-vehicle">
                <a href="/claim/motor-vehicle-form">Motor Vehicle Claim Form</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Agency">
              <Menu.Item key="agency-general">
                <a href="/agency/general-agent">General Agent</a>
              </Menu.Item>
              <Menu.Item key="agency-lifepro">
                <a href="/agency/lifepro-agent">LifePro Agent</a>
              </Menu.Item>
            </Menu.SubMenu>
            {/* <Menu.Item key="news">
              <a href="/news">News</a>
            </Menu.Item> */}
            <Menu.SubMenu title="About Us">
              <Menu.Item key="about-company-profile">
                <a href="/about/company-profile">Company Profile</a>
              </Menu.Item>
              {/* <Menu.Item key="about-organizational-chart">
                <a href="/about/organizational-chart">Organiztional Chart</a>
              </Menu.Item> */}
              <Menu.Item key="about-financial-report">
                <a href="/about/financial-report">Financial Report</a>
              </Menu.Item>
              <Menu.Item key="about-policy">
                <a href="/about/policy">Policy</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="contact-us">
              <a href="/contact-us">Contact Us</a>
            </Menu.Item>
            {/* <Menu.Item key="login">
              <a href="/login">Login</a>
            </Menu.Item> */}
          </Menu>
        </div>
        <Button
          className="content-button"
          type="primary"
          onClick={handleShowDrawer}
          icon={<MenuOutlined />}
        />
        <Drawer
          className="content-drawer"
          title="Menu"
          placement="right"
          closable={false}
          onClose={handleCloseDrawer}
          visible={visible}
        >
          <Menu className="drawer-menu" mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.SubMenu title="Products">
              <Menu.Item key="product-personal-accident">
                <a href="/products/personal-accident">Personal Accident</a>
              </Menu.Item>
              <Menu.Item key="product-housing-insurance">
                <a href="/products/housing">Housing Insurance</a>
              </Menu.Item>
              <Menu.Item key="product-motor-vehicle">
                <a href="/products/motor-vehicle">Motor Vehicle</a>
              </Menu.Item>
              <Menu.Item key="product-travel-insurance">
                <a href="/products/travel">Travel Insurance</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Claim">
              <Menu.Item key="claim-procedure">
                <a href="/claim/procedure">Claiming Procedure</a>
              </Menu.Item>
              <Menu.Item key="claim-report">
                <a href="/claim/report-form">Report Claim Form</a>
              </Menu.Item>
              <Menu.Item key="claim-vehicle">
                <a href="/claim/motor-vehicle-form">Motor Vehicle Claim Form</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Agency">
              <Menu.Item key="agency-general">
                <a href="/agency/general-agent">General Agent</a>
              </Menu.Item>
              <Menu.Item key="agency-lifepro">
                <a href="/agency/lifepro-agent">LifePro Agent</a>
              </Menu.Item>
            </Menu.SubMenu>
            {/* <Menu.Item key="news">
              <a href="/news">News</a>
            </Menu.Item> */}
            <Menu.SubMenu title="About Us">
              <Menu.Item key="about-company-profile">
                <a href="/about/company-profile">Company Profile</a>
              </Menu.Item>
              {/* <Menu.Item key="about-organizational-chart">
                <a href="/about/organizational-chart">Organiztional Chart</a>
              </Menu.Item> */}
              <Menu.Item key="about-financial-report">
                <a href="/about/financial-report">Financial Report</a>
              </Menu.Item>
              <Menu.Item key="about-policy">
                <a href="/about/policy">Policy</a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="contact-us">
              <a href="/contact-us">Contact Us</a>
            </Menu.Item>
            {/* <Menu.Item key="login">
              <a href="/login">Login</a>
            </Menu.Item> */}
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default PageHeader;

//https://github.com/Rupinderthind/Ant_design_navbar
