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

const UserRegPage = () => {
  //const [name, setBrName] = useState("");
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  // const handleOrgName = (e) => {
  //   setOrgName(e.target.value);
  // };
  const handleUser = (e) => {
    setUser(e.target.value);
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

              <Row>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                  <Button
                    onClick={(e) => {
                      navigate("/test-dashboard");
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
                        let data = {
                          name: user,
                          username: username,
                          password: password,
                          //role: "Branch Owner",
                          branch_id:localStorage.getItem("branch_id"),
                        };
                        console.log(data);
                        let response = await axios.post(
                          "http://localhost:8080/user/add",
                          data
                        );
                        console.log(response.data);
                        if (response.status == 200) {
                          window.alert("New User Created");
                          navigate("/test-dashboard");
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
                    }
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

export default UserRegPage;


// import React from "react";
// import { Row, Col } from "antd";
// import AdminRegistration from "../components/AdminRegistration";
// import RegistrationForm from "../components/Register";
// import RegistrationCommon from "../components/RegistrationCommon";
// import RegAdminSpecified from "../components/RegAdminSpecified";
// import RegNoSpecified from "../components/RegNoSpecified";

// const UserRegPage = () => {
//   return (
//     <div className="main-container">
//       <h1>User Registration</h1>
//       <br /><br />
//       <Row >
//         <Col span={12} style={{ padding: "0% 5%" }}>
//           <RegistrationCommon />
//         </Col>
//         <Col span={12} style={{ padding: "0% 5%" }}>
//           <RegNoSpecified />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default UserRegPage;