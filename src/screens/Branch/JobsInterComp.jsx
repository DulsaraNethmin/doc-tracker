import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import "../components/User.css"
import { useNavigate } from "react-router-dom"
import "./pages.css";
import {

    Button,
    Dropdown,
   
    PageHeader,
    Row,
    Col,
    Card,

 
  
  } from "antd";
  import {
    FileTextOutlined,
    UserOutlined,
    AppstoreOutlined,
    BellOutlined,
    WechatOutlined,
    CreditCardOutlined
  } from '@ant-design/icons';
  import { Layout,Menu } from 'antd';
  const { Header, Footer, Sider, Content } = Layout;
const originData = [];

const JobsInterComp = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const navigate = useNavigate();
    const [table_body, settable_body] = useState([]);

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        var data = job_data();
        console.log(data);
        setData();
    }, [])

    const job_data = async () => {
        try {
            // console.log('async'); /job/get/all/finisheddeliveries
            var response = await axios.get(`http://localhost:8080/job/get/all/finisheddeliveries?branch_id=${localStorage.getItem("branch_id")}`);
            console.log(response.data);
            const obj = response.data.map((e) => {
                return (
                    < tr >
                        <td>{e.uuid}</td>
                        <td>{e.branch_id}</td>
                        <td>{e.deliverer_id}</td>
                        <td>{e.customer_id}</td>
                        {/* <td><span onClick={() => { navigate(`/user/profile/user_id=${e.uuid}`, { replace: true, state: { uuid: e.uuid, name: e.name, username: e.username, email: e.email, role: e.role, telephone: e.telephone } }) }}>View</span></td> */}
                    </tr >
                );
            })
            setData(obj);
            settable_body(obj);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    const columns = [
        {
            title: 'UUID',
            dataIndex: 'uuid',
            width: '25%',
            editable: true,
        },
        {
            title: 'Branch ID',
            dataIndex: 'branch_id',
            width: '15%',
            editable: true,
        },
        {
            title: 'Deliverer ID',
            dataIndex: 'deliverer_id',
            width: '20%',
            editable: true,
        },
        {
            title: 'Customer ID',
            dataIndex: 'customer_id',
            width: '25%',
            editable: true,
        },
        {
            title: 'Profile',
            dataIndex: 'Profile',
            render: (_, record, obj) => {
                const id = obj.id;
                const editable = isEditing(obj.id);
                return (

                    <></>
                );
            }
        },
    ];
    const mergedColumns = columns.map((col)=>{
        return{
            ...col,
        };
    });

    return (
        <div className='main-container'>
        <PageHeader
    avatar={{
      src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
    }}
    //ghost={false}
    //onBack={() => window.history.back()}
    title="DocTracker"
    subTitle="Branch Mode"
    extra={[
    //   <Button
    //     key="3"
    //     onClick={async (e) => {
    //       e.preventDefault();
    //       navigate("/branch/customer/create");
    //     }}


    //   >
    //     Create New Customer
    //   </Button>,
    <Button
    key="2"
    onClick={async (e) => {
        e.preventDefault();
        navigate("/branch/dashboard");
    }}

>
    Branch Dashboard
</Button>,
      <Button
        key="1"
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={async (e) => {
          e.preventDefault();
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </Button>,
    ]}
  ></PageHeader>
        <div >
            <h2>Completed Jobs</h2>
            <Form form={form} component={false}>
            <table className='table'>
        <th>UUID</th>
        <th>Branch ID</th>
        <th>Deliverer ID</th>
        <th>Customer ID</th>
        {/* <th>Operation</th> */}
        {table_body}
      </table>
    </Form>
        </div></div>
    )
}

export default JobsInterComp;