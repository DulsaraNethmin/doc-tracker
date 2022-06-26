import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Select, Col, Row, Image } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import "../../components/User.css"
import { useNavigate } from "react-router-dom"
const originData = [];
const { Option } = Select;
const onFinish = (values) => {
    console.log(values);
};





const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

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

const ShowJobsInterCreated = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const navigate = useNavigate();
    const [Form_body, setForm_body] = useState([]);
    const use_id = localStorage.getItem('uuid');
    const id = { use_id }.use_id
    console.log(id)
    const [update, setUpdate] = useState({
        user_id: { id },
        Name: "",
        Username: "",
        Email: "",
        Role: "",
        Telephone: ""
    });
    //not
    const isEditing = (record) => record.key === editingKey;
    const Updateinfo = () => {

        console.log(update);
    }


    useEffect(() => {
        var data = user_data();
        console.log(data);
        setData()
    }, [])
    const { user_id } = useParams();
    const user_data = async () => {
        try {
            console.log('ccccc');
            var id=localStorage.getItem('doc_id')
            var response = await axios.get(`http://localhost:8080/job/delivery/get/by/doc?doc_id=${id}`);
            console.log(response.data);
            const obj = response.data.map((e) => {
                return (
                    <div className='Form'>

                        <Row gutter={[4, 4]}>

                            <Col span={12}>

                                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                                    <Form.Item
                                        name={['user', 'customer_id']}
                                        label="Customer ID">
                                        <label>{e.customer_id}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'customer_name']}
                                        label="Customer Name">
                                         <label htmlFor="">{e.customer_name}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'delivery_id']}
                                        label="Diliverer ID">
                                        <label htmlFor="">{e.delivery_id}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'doc_id']}
                                        label="doc_id">
                                        <label htmlFor="">{e.doc_id}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'doc_name']}
                                        label="Document Name">
                                        <label htmlFor="">{e.doc_name}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'end_custmer_id']}
                                        label="Receiving customer ID : ">
                                        <label htmlFor="">{e.end_custmer_id}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'end_customer_name']}
                                        label="Receiving customer Name : ">
                                        <label htmlFor="">{e.end_customer_name}</label>
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'job_id']}
                                        label="Job ID : ">
                                         <label htmlFor="">{e.job_id}</label>
                                    </Form.Item>

                                </Form>
                            </Col>
                        </Row>

                    </div>
                );
            })
            setData(obj);
            setForm_body(obj);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    //
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '25%',
            editable: true,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'Usrname',
            dataIndex: 'Usrname',
            width: '15%',
            editable: true,
        },
        {
            title: 'email address',
            dataIndex: 'email',
            width: '20%',
            editable: true,
        },
        {
            title: 'Job role',
            dataIndex: 'Job role',
            width: '25%',
            editable: true,
        },
        {
            title: 'id',
            dataIndex: 'id',
            width: '25%',
            editable: true,
        },
        {
            title: 'id',
            dataIndex: 'id',
            width: '25%',
            editable: true,
        },
        {
            title: 'id',
            dataIndex: 'id',
            width: '25%',
            editable: true,
        },

    ];
    const mergedColumns = columns.map((col) => {
        return {
            ...col,
        };
    });

    return (
        <div className='Table'>

            <Form form={form} component={false}>
                {Form_body}
            </Form>
        </div>
    )
}

export default ShowJobsInterCreated;



