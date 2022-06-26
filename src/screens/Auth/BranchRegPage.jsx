import "./pages.css";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Card,
} from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
const { Option } = Select;

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

const BranchRegPage = () => {
  const [branch_name, set_br_name] = useState("");
  const [address_1, set_addr1] = useState("");
  const [address_2, set_addr2] = useState("");
  const [address_3, set_addr3] = useState("");
  const [latitude, set_latitude] = useState("");
  const [longitude, set_longitude] = useState("");


  const handle_latitude = (e) => {
    set_latitude(e.target.value);
  };
  const handle_longitude = (e) => {
    set_longitude(e.target.value);
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
      <Row style={{ padding: "4% 0" }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Card title="Create Branch" alignment="center">
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

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  // onClick={(e) => {
                  //   navigate("/register-admin");
                  // }}
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
                        latitude: latitude,
                        longitude: longitude,
                        organization_id:
                          localStorage.getItem("organization_id"),
                      };
                      let response = await axios.post(
                        "http://localhost:8080/branch/add",
                        data
                      );

                      console.log(response.data);
                      localStorage.setItem("branch_id", response.data.uuid);

                      if (response.status == 200) {
                        //window.alert("Branch Created");
                        navigate("/branch/owner/create");
                      }
                      if (response.status != 200) {
                        window.alert("UnSuccessfull. Try again.");
                      }
                    }
                  }}
                >
                  Next
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <a href="https://www.latlong.net/">Click Here to Check Latitude and Longitude of the branch !</a>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
};

export default BranchRegPage;
