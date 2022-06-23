import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Card } from "antd";
import { useState } from "react";
import axios from "axios";
import Password from "antd/lib/input/Password";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
      <Row style={{ padding: "4% 0" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="Admin Login" alignment="center">
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
              <Form.Item>
                <p>{loginError}</p>
              </Form.Item>
              {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item> */}
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
                          "http://localhost:8080/user/get/oneOrgOwner",
                          data
                        );
                        console.log(response.data[0]["organization"]);
                        var organization_id = response.data[0]["organizationId"];
                        localStorage.setItem("organization_id", organization_id);
                        if (response.status == 200) {
                          setLoginError("You will be directed to Organization Dashboard");
                          navigate("/organization/dashboard");
                        }
                        if (response.status != 200) {
                          //window.alert("Login UNSuccessfull");
                          //console.log("Login Unsuccess 201");
                          setLoginError("Wrong Username-Password Combination for Organization Login");
                        }
                      } catch (e) {
                        window.alert("Login Unsucces");
                        
                      }
                    }}
                  >
                    Organization Log in
                  </Button>
                </Form.Item>
                <br />
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
                          navigate("/branch/dashboard");
                        }
                        if (response.status != 200) {
                          //window.alert("Login UNSuccessfull");
                          //console.log("Login Unsuccess 201");
                          setLoginError("Wrong Username-Password Combination for Branch Login");
                        }
                      } catch (e) {
                        window.alert("Login Unsucces");
                      }
                    }}
                  >
                    Branch Login
                  </Button>
                </Form.Item>
                <br />
                <Form.Item>
                  <Button
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Back
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default Login;
