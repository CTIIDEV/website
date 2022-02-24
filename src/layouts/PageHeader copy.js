import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Layout } from "antd";

import logo from "../assets/cntaiping-logo.png";
import { header } from "../data";
import "../css/PageHeader.css";

const PageHeader = () => {
  const { Header } = Layout;
  let history = useHistory();

  const getWindowsDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowsDimensions(getWindowsDimensions());
    };
    if (windowsDimensions < 1080) {
      console.log("ALL GOOD");
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowsDimensions, setWindowsDimensions] = useState(
    getWindowsDimensions()
  );

  console.log(windowsDimensions);

  const handlePage = (link) => {
    history.push(link);
  };

  const menus = header.map((menu, iM) => {
    const subMenus = menu.children.map((subMenu, iSM) => (
      <Menu.Item key={iSM.toString()}>
        <a href={subMenu.link}>{subMenu.title}</a>
      </Menu.Item>
    ));
    return (
      <>
        <Menu.SubMenu
          key={iM.toString()}
          title={menu.title}
          onTitleClick={(event) => {
            handlePage(menu.link);
          }}
        >
          {subMenus}
        </Menu.SubMenu>
      </>
    );
  });

  return (
    // <Header
    //   className="layout-header"
    //   style={{ borderBottom: "1px solid #f0f0f0", padding: "0 50px" }}
    // >
    //   <div className="layout-header__header-logo" style={{ float: "left" }}>
    //     <a href="/">
    //       <img src={logo} style={{ width: "150px" }} />
    //     </a>
    //   </div>
    //   <Menu
    //     className="layout-header__header-menus"
    //     style={{ float: "right" }}
    //     theme="light"
    //     mode="horizontal"
    //   >
    //     {menus}
    //   </Menu>
    // </Header>
    <nav className="layout-header">
      <div className="layout-header__header-logo">
        <a href="/">
          <img src={logo} style={{ width: "150px" }} />
        </a>
      </div>
      <div className="layout-header__header-container">
        <Menu mode="horizontal">{menus}</Menu>
      </div>
    </nav>
  );
};

export default PageHeader;
