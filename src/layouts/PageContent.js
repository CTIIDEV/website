import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductsPA from "../pages/products/ProductsPA";
import ProductsHousing from "../pages/products/ProductsHousing";
import ProductsMotorVehicle from "../pages/products/ProductsMotorVehicle";
import ProductsTravel from "../pages/products/ProductsTravel";
import ProductsMarineHull from "../pages/products/ProductsMarineHull";
import ProductsMarineCargo from "../pages/products/ProductsMarineCargo";
import Claims from "../pages/claims/Claims";
import MVClaim from "../pages/claims/MVClaim";
import ReportClaim from "../pages/claims/ReportClaim";
import GeneralAgent from "../pages/agencies/GeneralAgent";
import LifeProAgent from "../pages/agencies/LifeProAgent";
import NewsHome from "../pages/news/NewsHome";
import News from "../pages/news/News";
import ContactUs from "../pages/ContactUs";
import CompanyProfile from "../pages/about-us/CompanyProfile";
import FinancialReport from "../pages/about-us/FinancialReport";
import OrganizationalChart from "../pages/about-us/OrganizationalChart";
import Policy from "../pages/about-us/Policy";
import Login from "../pages/login";
import { NotFound } from "../pages/NotFound";
import { ImageUpload } from "../pages/ImageUpload";

const PageContent = () => {
  const { Content } = Layout;
  return (
    <Content className="app-content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/personal-accident">
          <ProductsPA />
        </Route>
        <Route exact path="/products/housing">
          <ProductsHousing />
        </Route>
        <Route exact path="/products/motor-vehicle">
          <ProductsMotorVehicle />
        </Route>
        <Route exact path="/products/travel">
          <ProductsTravel />
        </Route>
        <Route exact path="/products/marine-hull">
          <ProductsMarineHull />
        </Route>
        <Route exact path="/products/marine-cargo">
          <ProductsMarineCargo />
        </Route>
        <Route exact path="/claim/procedure">
          <Claims />
        </Route>
        <Route exact path="/claim/motor-vehicle-form">
          <MVClaim />
        </Route>
        <Route exact path="/claim/report-form">
          <ReportClaim />
        </Route>
        <Route exact path="/agency/general-agent">
          <GeneralAgent />
          {/* <ImageUpload /> */}
        </Route>
        <Route exact path="/agency/lifepro-agent">
          <LifeProAgent />
        </Route>
        <Route exact path="/news">
          <NewsHome />
        </Route>
        <Route exact path="/news/:id">
          <News />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/about/company-profile">
          <CompanyProfile />
        </Route>
        <Route exact path="/about/organizational-chart">
          <OrganizationalChart />
        </Route>
        <Route exact path="/about/financial-report">
          <FinancialReport />
        </Route>
        <Route exact path="/about/policy">
          <Policy />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Content>
  );
};

export default PageContent;
