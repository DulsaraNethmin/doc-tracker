import React from "react";
import { Form, Input, InputNumber, Button, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

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
                name={["user", "orgName"]}
                label="Organization Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["user", "details"]}
                label="Organization Details"
              >
                <Input.TextArea />
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
                    onClick={(e) => {
                      navigate("/register-admin");
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