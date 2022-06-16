import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from 'antd';
import "../components/User.css"

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const UserProfile = ({props}) => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <div className='UserProf'>
        <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        disabled: componentDisabled,
      }}
      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
    >
      <Form.Item label="ID">
        <Input value={props.id}/>
      </Form.Item>
      <Form.Item label="Name">
        <Input value={props.name}/>
      </Form.Item>
      <Form.Item label="User name">
        <Input value={props.username}/>
      </Form.Item>
      <Form.Item label="Email">
        <Input value={props.email}/>
      </Form.Item>
      <Form.Item label="Password">
        <Input value={props.password}/>
      </Form.Item>
      <Form.Item label="Role">
        <Input value={props.role}/>
      </Form.Item>
      <Form.Item label="Telephone">
        <Input value={props.telephone}/>
      </Form.Item>     
    </Form>
<div className='saveButton'>
<Button type="primary">Save Changes</Button>
</div>
    
    </div>
  );
};

export default () => <UserProfile />;