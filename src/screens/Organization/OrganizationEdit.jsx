//import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import "../components/User.css"
import { useNavigate } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";
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
  Table,
  Select,
  Tag,
  Typography,
} from "antd";
const originData = [];

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

const OrganizationEdit = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const navigate = useNavigate();
  const [org_name, set_org_name] = useState("");
  const [email, set_email] = useState("");
  const [telephone, set_telephone] = useState("");
  const [owner_name, set_owner_name] = useState("");
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const [fill_org_name, setFill_org_name] = useState("");

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

  const handle_org_name = (e) => {
    set_org_name(e.target.value);
  };

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    var data = user_data();
    console.log(data);
    setData();
  }, []);

  const user_data = async () => {
    try {
      var data = localStorage.getItem("organization_id");

      var response = await axios.get(
        `http://localhost:8080/organization/get/details?organization_id=${data}`
      );

      console.log(response.data[0].o_name);
      const obj = response.data.map((e) => {
        return {
          Organization_Name: e.o_name,
          Organization_Owner: e.name,
          Org_Owner_Username: e.username,
          Org_Owner_Password: e.password,
          email: e.email,
          telephone: e.telephone,
        };
      });
      const o_name = response.data[0].o_name;
      setData(obj);
      setFill_org_name(o_name);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      title: "Organization Name",
      dataIndex: "Organization_Name",
      //width: '25%',
      editable: true,
    },
    {
      title: "Organization Owner",
      dataIndex: "Organization_Owner",
      //width: '15%',
      editable: true,
    },
    {
      title: "Owner_Username",
      dataIndex: "Org_Owner_Username",
      //width: '20%',
      editable: true,
    },
    {
      title: "Owner Password",
      dataIndex: "Org_Owner_Password",
      //width: '25%',
      editable: true,
    },
    {
      title: "Organization Email",
      dataIndex: "email",
      //width: '25%',
      editable: true,
    },
    {
      title: "Organization Telephone",
      dataIndex: "telephone",
      //width: '25%',
      editable: true,
    },
  ];

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    };
  });

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
      <div className="Table">
        <h2>Organization Details</h2>
        <Form form={form} component={false}>
          <Table
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
          />
        </Form>
      </div>
      <Row style={{ padding: "4% 0" }}>
        <Col span={3}></Col>
        <Col span={18}>
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
                name="org_name"
                label="Organization Name"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  defaultValue={fill_org_name}
                  onChange={(e) => {
                    handle_org_name(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                name="owner_name"
                label="Organization Owner Name"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization Owner Name!",
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
                label="Organization Owner Username"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization Owner Username!",
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
                label="Organization Owner Password"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization Owner Password!",
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

              <Form.Item
                name="email"
                label="Organization Email"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization Email Address!",
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
                name="telehone"
                label="Organization Telephone Number"
                //tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input Organization Telephone Number!",
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

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={async (e) => {
                    e.preventDefault();

                    console.log(org_name);
                    let data = {
                      name: org_name,
                      email: email,
                      telephone: telephone,
                      owner_name: owner_name,
                      username: username,
                      password: password,
                      organization_id: localStorage.getItem("organization_id"),
                      user_id: localStorage.getItem("user_id"),
                    };
                    console.log(localStorage.getItem("user_id"));
                    let response = await axios.post(
                      "http://localhost:8080/organization/update",
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
                  }}
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
};

export default OrganizationEdit;
