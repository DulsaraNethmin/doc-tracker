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
  Steps,
  Step,
  Row,
  Col,
  Card,
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
    <div className='Background'>
    <div className='Cards'>
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Domain" bordered={false}>
                    <Form>
                    <Form.Item label="Id" name="customer_id">
                            <label htmlFor=""></label>
                        </Form.Item>

                        <Form.Item label="Name" name="id">
                            <label htmlFor=""></label>
                        </Form.Item>

                        <Form.Item label="User Name" name="admin_id">
                            <label htmlFor=""></label>
                        </Form.Item>

                        <Form.Item label="Email" name="customer_id">
                            <label htmlFor=""></label>
                        </Form.Item>

                        <Form.Item label="Telephone" name="customer_id">
                            <label htmlFor=""></label>
                        </Form.Item>

                    </Form>
                </Card>
            </Col>

            <Col span={8}>
                <Card title="Datails" bordered={false}>
                    {/* <Steps direction="vertical" current={1}>
                        <Step title="Finished" description="Order recieved" />
                        <Step title="In Progress" description="Order confirmed" />
                        <Step title="Waiting" description="Desitination 1" />
                        <Step title="Waiting" description="Destination 2" />
                        <Step title="Waiting" description="Received" />
                    </Steps> */}
                </Card>
            </Col>
        </Row>
        <div className='saveButton'>
<Button type="primary">Save Changes</Button>
</div>
    </div>
</div>
  );
};

export default () => <UserProfile />;