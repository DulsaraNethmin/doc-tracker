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


const RegistrationForm = () => {
  
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="94">+94</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <div>
      <Row style={{ padding: "2% 0" }}>
        <Col span={8}></Col>

        <Col span={8}>
          <Card title="Register New User" alignment="center">
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
              <Form.Item
                name="company"
                label="Company"
                tooltip="Company Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the company name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="branch"
                label="Branch"
                tooltip="Branch Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the branch name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="name"
                label="Name"
                tooltip="Name of the user"
                rules={[
                  {
                    required: true,
                    message: "Please input the name of the user!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="employeeID"
                label="Employee ID"
                tooltip="Employee ID"
                rules={[
                  {
                    required: true,
                    message: "Please input the name of the user!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="mobile"
                label="Mobile Number"
                rules={[
                  {
                    required: true,
                    message: "Please input user Mobile number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <b>Allocation</b>

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
                name="userType"
                label="User Type"
                rules={[
                  {
                    required: true,
                    message: "Please select the User Type!",
                  },
                ]}
              >
                <Select placeholder="select the user type">
                  <Option value="admin">Admin</Option>
                  <Option value="non-admin">Non-Admin</Option>
                </Select>
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
};

export default RegistrationForm;