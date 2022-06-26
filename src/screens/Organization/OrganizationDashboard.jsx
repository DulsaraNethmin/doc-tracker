import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import Password from "antd/lib/input/Password";
import { useNavigate } from "react-router-dom";
import Widget from "../../components/Dashboard/Widget";
import Tbl from "../../components/Dashboard/Table";
import "../../components/Dashboard.css";
import Head from "../../components/Dashboard/Head";
import { MoreOutlined } from "@ant-design/icons";
import "./pages.css";
import {
  Layout,
  Button,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Col,
  Card,
  Form,
  Input,
  Tag,
  Typography,
} from "antd";

import BranchesTable from "./BranchesTable";
import OrganizationTable from "./OrganizationTable";

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

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

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
                navigate("/organization/edit");
              }}
            >
              Edit Organization
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

      <OrganizationTable />
      <BranchesTable />

      <div>
        <Row style={{ padding: "4% 0" }}>
          <Col span={3}></Col>
          <Col span={18}>
            <Card
              title="Enter Username and Password of a branch to edit"
              alignment="center"
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  Username
                  <Input
                    onChange={(e) => {
                      handleUsername(e);
                    }}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  Password
                  <Input
                    onChange={(e) => {
                      handlePassword(e);
                    }}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>{loginError}</Form.Item>

                <Row>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={async (e) => {
                        e.preventDefault();
                        setLoginError();
                        //axios.post('http://3.110.165.97:8080/',{"username":username,"password":password})
                        try {
                          console.log(username, password);
                          let data = { username: username, password: password };
                          let response = await axios.post(
                            "http://localhost:8080/user/get/oneBrOwner",
                            data
                          );
                          console.log(response.data[0]["branch"]);
                          var branch_id = response.data[0]["branchId"];
                          localStorage.setItem("branch_id", branch_id);
                          if (response.status == 200) {
                            window.alert("Loaded Branch Details");
                            navigate("/branch/edit");
                          }
                          if (response.status != 200) {
                            //window.alert("Login UNSuccessfull");
                            //console.log("Login Unsuccess 201");
                            setLoginError(
                              "Wrong Username-Password Combination"
                            );
                          }
                        } catch (e) {
                          window.alert("Login Unsucces");
                        }
                      }}
                    >
                      Edit Branch
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
