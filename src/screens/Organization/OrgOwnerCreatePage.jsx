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

const OrgOwnerCreatePage = () => {
  const [owner, setOwner] = useState("");
  const [organization_owneruser_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organization_owner_email, setEmail] = useState("");
  const [organization_owner_telephone, setTelephone] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [sendEmail, setSendEmail] = useState(false);

  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  //   setSendEmail(e.target.value);
  // };

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
    <div>
      <Row style={{ padding: "4% 0" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="Create Organization Owner" alignment="center">
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
                  placeholder="Owner Name"
                />
              </Form.Item>

              <Form.Item
                name="organization_owneruser_name"
                label="Org OwnerUser Name"
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
                label="Org Password"
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
                name="organization_owner_telephone"
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
                name="organization_owner_email"
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
                      //console.log(owner, organization_owneruser_name, password);
                      console.log(sendEmail);
                      // if (sendEmail) {
                      //   try {
                      //     let data2 = {
                      //       sendEmailStatus: sendEmail,
                      //       name: owner,
                      //       username: organization_owneruser_name,
                      //       password: password,
                      //       role: "Organization Owner",
                      //       telephone: organization_owner_telephone,
                      //       email: organization_owner_email,
                      //       organization_name:
                      //         localStorage.getItem("organization_name"),
                      //     };
                      //     await axios.post(
                      //       "http://localhost:8080/send/mail",
                      //       data2
                      //     );
                      //     console.log("Email Sent");
                      //   } catch (e) {
                      //     console.log("Email Sending Unsuccessful");
                      //   }
                      // }

                      let data = {
                        sendEmailStatus: sendEmail,
                        name: owner,
                        username: organization_owneruser_name,
                        password: password,
                        role: "Organization Owner",
                        telephone: organization_owner_telephone,
                        email: organization_owner_email,
                        organization_id:
                          localStorage.getItem("organization_id"),
                      };

                      //console.log(data);
                      let response = await axios.post(
                        "http://localhost:8080/user/add",
                        data
                      );

                      if (response.status == 200 && sendEmail) {
                        try {
                          let data2 = {
                            sendEmailStatus: sendEmail,
                            name: owner,
                            username: organization_owneruser_name,
                            password: password,
                            role: "Organization Owner",
                            telephone: organization_owner_telephone,
                            email: organization_owner_email,
                            organization_name:
                              localStorage.getItem("organization_name"),
                          };
                          console.log("Email Sent");
                          navigate("/organization/dashboard");
                          await axios.post(
                            "http://localhost:8080/send/mail",
                            data2
                          );
                        } catch (e) {
                          console.log("Email Sending Unsuccessful");
                        }
                      }

                      //console.log(response.data);
                      else if (response.status == 200) {
                        //window.alert("Organization Owner Created");
                        navigate("/organization/dashboard");
                      } else if (response.status == 201) {
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
                        //     console.log(sendEmail);
                        //     if (sendEmail) {
                        //       try {
                        //         let data2 = {
                        //           name: owner,
                        //           username: organization_owneruser_name,
                        //           password: password,
                        //           role: "Organization Owner",
                        //           telephone: organization_owner_telephone,
                        //           email: organization_owner_email,
                        //           organization_name:
                        //             localStorage.getItem("organization_name"),
                        //         };
                        //         await axios.post("http://localhost:8080/send/mail",
                        //         data2);
                        //         console.log("Email Sent");
                        //     } catch (e) {
                        //         console.log("Email Sending Unsuccessful")
                        //     }

                        //     }
                      }
                    }}
                  >
                    Next*
                  </Button>
                </Form.Item>
              </Row>
              <h6>
                *After Creating an Organization and the Organization Owner, it
                is essential to create a Branch. If not the crreated
                organization will not be validated.
              </h6>
              <h6>
                *So proceed with creating a branch, after going to organization
                dashboard.
              </h6>
            </Form>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default OrgOwnerCreatePage;
