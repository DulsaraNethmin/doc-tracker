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

const OrgCreate = () => {
  const [name, setOrgName] = useState("");
  const [owner, setOwner] = useState("");

  const handleOrgName = (e) => {
    setOrgName(e.target.value);
  };
  const handleOwner = (e) => {
    setOwner(e.target.value);
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
          <Card title="Create Organization" alignment="center">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              alignment="left"
            >
              <Form.Item
                name="name"
                label="Organization"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    handleOrgName(e);
                  }}
                  prefix={<HomeOutlined className="site-form-item-icon" />}
                  placeholder="Organization Name"
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
                      if (name == "") {
                        window.alert(
                          "Incomplete. Please fill organization Name."
                        );
                      } else {
                        console.log(name);
                        let data = { name: name};
                        let response = await axios.post(
                          "http://localhost:8080/organization/add",
                          data
                        );
                        console.log(response.data);
                        localStorage.setItem("org_id",response.data.uuid);
                        if (response.status == 200) {
                          window.alert("Organization Created");
                          navigate("/create-org-owner");
                        }
                        if (response.status != 200) {
                          window.alert("Login UNSuccessfull");
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

export default OrgCreate;
