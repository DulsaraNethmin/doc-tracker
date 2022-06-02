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

const RegistrationCommon = () => {
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
          </Form>
        </Card>
      
    </div>
  );
};

export default RegistrationCommon;