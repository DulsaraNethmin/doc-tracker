import React from "react";
import "./pages.css";

import {
  Layout,
  Button,
  Dropdown,
  Menu,
  PageHeader, Checkbox,
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Tag,
  Typography,
} from "antd";
const { Paragraph } = Typography;
const { Header, Footer, Sider, Content } = Layout;
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

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const BranchOwnerRegPage = () => {
  //const [name, setBrName] = useState("");
  const [owner, setOwner] = useState("");
  const [Br_owneruser_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [br_owner_email, setEmail] = useState("");
  const [br_owner_telephone, setTelephone] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [sendEmail, setSendEmail] = useState(false);

  const handleSendEmail = (e) => {
    setSendEmail(e.target.checked);
  };

  const handleOwner = (e) => {
    setOwner(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTelephone = (e) => {
    setTelephone(e.target.value);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          avatar={{
            src: "logo.jpeg",
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
              <p>{usernameError}</p>
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
              <p>{passwordError}</p>

              <Form.Item
                name="br_owner_telephone"
                label="Contact Number"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please Input Contact Number",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handleTelephone(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="br_owner_email"
                label="Email"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please Input Email Address",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handleEmail(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="sendEmail"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                onChange={(e) => {
                  handleSendEmail(e);
                }}
              >
                <Checkbox>Send User Details via Email</Checkbox>
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
                      setUsernameError();
                      setPasswordError();

                      if(owner == ""||Br_owneruser_name == ""||password == ""||br_owner_telephone == ""||br_owner_email == ""){
                        window.alert ("Please Fill all the fields before submitting")
                      }else{
                      
                      let data = {
                        sendEmailStatus: sendEmail,
                        name: owner,
                        username: Br_owneruser_name,
                        password: password,
                        role: "Branch Owner",
                        telephone: br_owner_telephone,
                        email: br_owner_email,
                        branch_id: localStorage.getItem("branch_id"),
                        organization_name: localStorage.getItem("organization_name"),
                        image_url:"https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png"
                      };
                      //console.log(data);
                      let response = await axios.post(
                        "http://localhost:8080/user/add",
                        data
                      );

                      //console.log(response.data);
                      if (response.status == 200) {
                        window.alert("Branch Owner Created");
                        navigate("/organization/dashboard");
                      }
                      if (response.status == 201) {
                        if (response.data.username) {
                          setUsernameError(response.data.username);
                          //response.data.username = "";
                        }
                        if (response.data.password) {
                          setPasswordError(response.data.password);
                          //response.data.password = "";
                        }

                        console.log(response.data.username);
                        console.log(response.data.password);

                        //window.alert(response.data.password);
                      }
                      }
                    }}
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
