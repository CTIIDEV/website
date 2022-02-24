import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import PageHeader from "../src/layouts/PageHeader";
import PageContent from "../src/layouts/PageContent";
import PageFooter from "../src/layouts/PageFooter";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <PageHeader />
          <PageContent />
          <PageFooter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
