import React from "react";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
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

const DelivererRegistration = () => {
  //const [name, setBrName] = useState("");
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [sendEmail, setSendEmail] = useState(false);

  const handleSendEmail = (e) => {
    setSendEmail(e.target.checked);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
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
    <div>
      <Row style={{ padding: "4% 0" }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Card title="Create User" alignment="center">
            <Form
              {...layout}
              name="nest-messages"
              //onFinish={onFinish}
              validateMessages={validateMessages}
              alignment="left"
            >
              <Form.Item
                name="user"
                label="name"
                // rules={[
                //   {
                //     required: true,
                //   },
                // ]}
              >
                <Input
                  onChange={(e) => {
                    handleUser(e);
                  }}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="User's Name"
                />
              </Form.Item>

              <Form.Item
                name="username"
                label="User Name"
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
                label="Password"
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
                name="telephone"
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
                name="email"
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
                      navigate("/branch/dashboard");
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

                      console.log(user, username, password);

                      console.log(user, username, password);
                      if(user == ""||username == ""||password == ""||password == ""||telephone == ""||email == ""){
                        window.alert ("Please Fill all the fields before submitting")
                      }else{
                      let data = {
                        sendEmailStatus: sendEmail,
                        name: user,
                        username: username,
                        password: password,
                        role: "Deliverer",
                        telephone: telephone,
                        email: email,
                        branch_id: localStorage.getItem("branch_id"),
                        image_url:"https://nethmin-bucket.s3.ap-south-1.amazonaws.com/profile.png"
                      };
                      console.log(data);
                      let response = await axios.post(
                        "http://localhost:8080/user/add",
                        data
                      );
                      console.log(response.data);
                      if (response.status == 200) {
                        //window.alert("New User Created");
                        navigate("/branch/dashboard");
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
                      }
                    }
                    }}
                  >
                    Register
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

export default DelivererRegistration;

