import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import "../components/User.css"
import { useNavigate } from "react-router-dom"
const originData = [];

const JobsInternalPending = () => {
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
            // console.log('async');
            var response2 = await axios.get(`http://localhost:8080/job/get/all/openpending?branch_id=${localStorage.getItem("branch_id")}`);
            console.log(response2.data);
            const obj = response2.data.map((e) => {
                return (
                    < tr >
                        <td>{e.customer_name}</td>
                        <td>{e.deliverer}</td>
                        <td>{e.job_id}</td>
                       
                        {/* <td>{e.customer_id}</td> */}
                        {/* <td><span onClick={() => { navigate(`/user/profile/user_id=${e.uuid}`, { replace: true, state: { uuid: e.uuid, name: e.name, username: e.username, email: e.email, role: e.role, telephone: e.telephone } }) }}>View</span></td> */}
                    </tr >
                );
            })
            setData(obj);
            settable_body(obj);
            return response2.data;
        } catch (e) {
            console.log(e);
        }
    }
    const columns = [
        {
            title: 'Job Created by',
            dataIndex: 'customer_name',
            width: '25%',
            editable: true,
        },
        {
            title: 'Deliverer',
            dataIndex: 'deliverer',
            width: '15%',
            editable: true,
        },
        {
            title: 'Job ID',
            dataIndex: 'job_id',
            width: '20%',
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
        <div>
            <h2>Pending Jobs</h2>
            <Form form={form} component={false}>
            <table className='table'>
        <th>Job Created by</th>
        <th>Deliverer</th>
        <th>Job ID</th>
       
        {/* <th>Operation</th> */}
        {table_body}
      </table>
    </Form>
        </div>
    )
}

export default JobsInternalPending;