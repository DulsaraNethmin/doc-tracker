import React from "react";
import { useNavigate } from "react-router-dom";
import Widget from "../../components/Dashboard/Widget";
import Tbl from "../../components/Dashboard/Table";
import "../../components/Dashboard.css";
import Head from "../../components/Dashboard/Head";
import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Tag,
  Typography,
} from "antd";

import BranchesTable from "./BranchesTable";

const logo = new URL("../../images/logo.jpeg", import.meta.url);
const { Paragraph } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  var data = localStorage.getItem("organization_name");

  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }}
          //ghost={false}
          //onBack={() => window.history.back()}
          title="DocTracker"
          subTitle="Organization Mode"
          extra={[
            // <Button key="3">Operation</Button>,
            <Button
              key="2"
              onClick={(e) => {
                navigate("/branch/create");
              }}
            >
              Create New Branch
            </Button>,
            <Button
              key="1"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={async (e) => {
                e.preventDefault();
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </Button>,
          ]}
        ></PageHeader>
      </div>

      <Layout className="site-layout">
        <header
          className="site-layout-background"
          // style={{
          //   padding: 0,
          // }}
        >
          
          <div className="head">
            <h1>Welcome {data}</h1>
            <br />
            <h2 className="headerH1">{date}</h2>
          </div>
        </header>
      </Layout>

      <BranchesTable />

      {/* <Button
        onClick={(e) => {
          navigate("/branch/create");
        }}
        type="primary"
      >
        Create Branch
      </Button> */}

      {/* <Button
        onClick={(e) => {
          navigate("/branch/table");
        }}
        type="primary"
      >
        Branches
      </Button> */}

      {/* <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={async (e) => {
          e.preventDefault();
          localStorage.clear();
          navigate("/");
        }}
      >
        Organization Logout
      </Button> */}
    </div>
  );
};

export default OrganizationDashboard;
