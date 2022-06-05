import React, { useState } from "react";
import { Form, Input, Select, Row, Col, Checkbox, Button, Card } from "antd";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 16, offset: 8 },
    },
  };

const AdminRegistration = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };


    return (
      <div>
        <Row style={{ padding: "2% 0" }}>
          <Col span={8}></Col>
  
          <Col span={8}>
            <Card title="Register New Admin" alignment="center">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  residence: ["number", "street", "town"],
                  prefix: "94",
                }}
                scrollToFirstError
              >
  
                <b>Enter Details</b>
  
                <Form.Item
                  name="username"
                  label="Username"
                  tooltip="This is used in Logging to the Application."
                  rules={[
                    {
                      required: true,
                      message: "Please input the username!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
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
                  <Input.Password />
                </Form.Item>
  
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
  
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
  
  
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Should accept agreement")),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>User Details are correct and up to date.</Checkbox>
                </Form.Item>
  
                <Row>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="default" htmlType="submit">
                      Cancel
                    </Button>
                  </Form.Item>
  
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
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
}

export default AdminRegistration;