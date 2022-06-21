import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./pages.css";

import {
    Form,
    Input,
    Button,
    DatePicker,
    Row,
    Col,
    Card,
    Image
} from 'antd';
import { useNavigate } from "react-router-dom"
// import "../components/User.css"
const originData = [];
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const { RangePicker } = DatePicker;
const { TextArea } = Input;


const UserProfile = () => {


    const onFinish = (values) => {
        console.log(values);
    };



    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const navigate = useNavigate();

    const isEditing = (record) => record.key === editingKey;


    useEffect(() => {
        var data = user_data();
        console.log(data);
        setData()
    }, [])


    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const user_data = async () => {
        try {
            console.log('aaaaaa');
            var response = await axios.get('http://localhost:8080/user/get/all?branch_id=1356d36d-05ca-8000-98bf-5a941355f418');
            console.log(response.data);
            const obj = response.data.map((e) => {
                return (
                    {

                        "id": e.id,
                        "name": e.name,
                        "Usrname": e.username,
                        "email": e.email,
                        "telephone": e.telephone,
                        "Job role": e.role,

                    }
                );
            })
            setData(obj);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='Background'>
            <div className='Cards'>
                <Row gutter={16}>

                    <Col span={5}>
                        <label htmlFor=""></label><br /><br />
                        <Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /><br />
                        <label htmlFor=""><h2>User Name</h2></label>
                    </Col>

                    <Col span={11}>
                        {/* <Card bordered={false}> */}
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            initialValues={{
                                size: componentSize,
                            }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}

                            {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
                        >
                            <Form.Item name="customer_id">

                            </Form.Item>
                            <Form.Item label="Id" name="customer_id">
                                <label htmlFor=""><Input></Input></label>
                            </Form.Item>

                            <Form.Item label="Name" name="id" rules={[{ required: true }]}>
                                <label htmlFor=""><Input /></label>
                            </Form.Item>

                            <Form.Item label="User Name" name="admin_id">
                                <label htmlFor=""><Input /></label>
                            </Form.Item>

                            <Form.Item label="Email" name="customer_id">
                                <label htmlFor=""><Input /></label>
                            </Form.Item>

                            <Form.Item label="Telephone" name="customer_id">
                                <label htmlFor=""><Input /></label>
                            </Form.Item>
                            <Form.Item label="Job role" name="customer_id">
                                <label htmlFor=""><Input /></label>
                            </Form.Item>

                        </Form>
                        {/* <Button>Save changes</Button> */}

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>

                        {/* </Card> */}
                    </Col>


                </Row>
                <div className='saveButton'>
                    {/* <Button type="primary">Save Changes</Button> */}
                </div>
            </div>
        </div>
    );
};

export default () => <UserProfile />;