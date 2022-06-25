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

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const BranchEdit = () => {
  const [branch_name, set_br_name] = useState("");
  const [address_1, set_addr1] = useState("");
  const [address_2, set_addr2] = useState("");
  const [address_3, set_addr3] = useState("");
  const [email, set_email] = useState("");
  const [telephone, set_telephone] = useState("");
  const [owner_name, set_owner_name] = useState("");
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [latitude, set_latitude] = useState("");
  const [longitude, set_longitude] = useState("");


  const handle_latitude = (e) => {
    set_latitude(e.target.value);
  };
  const handle_longitude = (e) => {
    set_longitude(e.target.value);
  };

  const handle_owner_name = (e) => {
    set_owner_name(e.target.value);
  };
  const handle_username = (e) => {
    set_username(e.target.value);
  };
  const handle_password = (e) => {
    set_password(e.target.value);
  };
  const handle_email = (e) => {
    set_email(e.target.value);
  };
  const handle_telephone = (e) => {
    set_telephone(e.target.value);
  };

  const handle_br_name = (e) => {
    set_br_name(e.target.value);
  };

  const handle_addr1 = (e) => {
    set_addr1(e.target.value);
  };

  const handle_addr2 = (e) => {
    set_addr2(e.target.value);
  };

  const handle_addr3 = (e) => {
    set_addr3(e.target.value);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

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
            <SingleBranchTable />

            <br />
            <br />

            <Card title="Add New Details*" alignment="center">
              <p>*Should fill all the fiels before pressing Update button.</p>
              <br />
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
              >
                <Form.Item
                  name="branch_name"
                  label="Branch Name"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_br_name(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="address_1"
                  label="Address 1 (Number)"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_addr1(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="address_2"
                  label="Address 2 (Street)"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_addr2(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="address_3"
                  label="Address 3 (Town)"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_addr3(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                name="latitude"
                label="Latitude"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handle_latitude(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="longitude"
                label="Longitude"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handle_longitude(e);
                  }}
                />
              </Form.Item>

                <Form.Item
                  name="telehone"
                  label="Branch Telephone Number"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Telephone Number!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_telephone(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Branch Email"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Email Address!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_email(e);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="owner_name"
                  label="Branch Owner Name"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Owner Name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_owner_name(e);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="username"
                  label="Branch Owner Username"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Owner Username!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_username(e);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Branch Owner Password"
                  //tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Owner Password!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      handle_password(e);
                    }}
                  />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={async (e) => {
                      e.preventDefault();
                      if (branch_name == "") {
                        window.alert("Incomplete. Please fill Branch Name.");
                      } else {
                        console.log(branch_name);
                        let data = {
                          name: branch_name,
                          number: address_1,
                          town: address_3,
                          street: address_2,
                          email: email,
                          telephone: telephone,
                          owner_name: owner_name,
                          username: username,
                          password: password,
                          branch_id: localStorage.getItem("branch_id"),
                        };
                        let response = await axios.post(
                          "http://localhost:8080/branch/update",
                          data
                        );

                        console.log(response.data);
                        localStorage.setItem("branch_id", response.data.uuid);

                        if (response.status == 200) {
                          //window.alert("Branch Created");
                          navigate("/organization/dashboard");
                        }
                        if (response.status != 200) {
                          window.alert("UnSuccessfull. Try again.");
                        }
                      }
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={async (e) => {
                      e.preventDefault();
                      var data = localStorage.getItem("branch_id");

                      var response = await axios.delete(
                        `http://localhost:8080/branch/delete?uuid=${data}`
                      );
                      if (response.status == 200) {
                        window.alert("Branch Deleted");
                        navigate("/organization/dashboard");
                      }
                      if (response.status != 200) {
                        window.alert("Deletion UnSuccessfull. Try again.");
                      }
                    }}
                  >
                    Delete Branch
                  </Button>
                </Form.Item>
              </Form>
            </Card>
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
