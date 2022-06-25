import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import Password from "antd/lib/input/Password";
import { useNavigate } from "react-router-dom";
import BranchesTable from "./BranchesTable";
import SingleBranchTable from "./SingleBranchTable";
import { MoreOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Dropdown,
  Menu,
  PageHeader,
  Row, Col, Card, Form, Input,
  Tag,
  Typography,
} from "antd";
const { Paragraph } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const BranchEdit = () => {
  const navigate = useNavigate();
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
            <Button
              key="3"
              onClick={(e) => {
                navigate("/organization/dashboard");
              }}
            >
              Organization Dashboard
            </Button>,
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
      <div>
        <Row style={{ padding: "4% 0" }}>
          <Col span={3}></Col>
          <Col span={18}>
            <Card title="Details of the Branch" alignment="center">
              <SingleBranchTable />
            </Card>
            <Card></Card>
          </Col>
          <Col span={3}></Col>
        </Row>

        {/* <Row style={{ padding: "4% 0" }}>
          <Col span={3}></Col>
          <Col span={18}></Col>
          <Col span={3}></Col>
        </Row> */}
      </div>
    </div>
  );
};

export default BranchEdit;
