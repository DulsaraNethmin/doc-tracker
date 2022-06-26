import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const BranchOwnerRegPage = () => {
  //const [name, setBrName] = useState("");
  const [owner, setOwner] = useState("");
  const [Br_owneruser_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleOrgName = (e) => {
  //   setOrgName(e.target.value);
  // };
  const handleOwner = (e) => {
    setOwner(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Row style={{ padding: "4% 0" }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Card title="Create Branch Owner" alignment="center">
            <Form
              {...layout}
              name="nest-messages"
              //onFinish={onFinish}
              validateMessages={validateMessages}
              alignment="left"
            >
              <Form.Item
                name="owner"
                label="Owner"
                // rules={[
                //   {
                //     required: true,
                //   },
                // ]}
              >
                <Input
                  onChange={(e) => {
                    handleOwner(e);
                  }}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Branch Owner Name"
                />
              </Form.Item>

              <Form.Item
                name="Br_owneruser_name"
                label="Branch Owner User Name"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input username",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handleUsername(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Branch Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  onChange={(e) => {
                    handlePassword(e);
                  }}
                />
              </Form.Item>

              <Row>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                  <Button
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Back
                  </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    // onClick={(e) => {
                    //   navigate("/register-admin");
                    // }}
                    onClick={async (e) => {
                      e.preventDefault();
                      
                        console.log(owner, Br_owneruser_name, password);
                        let data = {
                          name: owner,
                          username: Br_owneruser_name,
                          password: password,
                          role: "Branch Owner",
                          // org_id:localStorage.getItem("org_id"),
                          // role: "Organization Owner",
                          branch_id:localStorage.getItem("branch_id"),
                        };
                        console.log(data);
                        let response = await axios.post(
                          "http://localhost:8080/user/add",
                          data
                        );
                        console.log(response.data);
                        if (response.status == 200) {
                          window.alert("Branch Owner Created");
                          navigate("/organization/dashboard");
                        }
                        if (response.status != 200) {
                          window.alert(
                            "Organization Owner Creation UNSuccessfull"
                          );
                        }
                      }
                    }
                  >
                    Next
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

export default BranchOwnerRegPage;
