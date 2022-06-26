import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import "../components/User.css"
import { useNavigate } from "react-router-dom"
const originData = [];

const JobsIntPendTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const navigate = useNavigate();
    const [table_body, settable_body] = useState([]);

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        var data = job_data();
        console.log(data);
        //setData();
    }, [])

    const job_data = async () => {
        try {
            // console.log('async');
            var response = await axios.get(`http://localhost:8080/job/get/all/opendeliveries?branch_id=${localStorage.getItem("branch_id")}`);
            var response2 = await axios.get(`http://localhost:8080/job/get/all/openpending?branch_id=${localStorage.getItem("branch_id")}`);
            var response3 = await axios.get(`http://localhost:8080/user/get/deliverer?branch_id=${localStorage.getItem("branch_id")}`);
            console.log(response.data);
            console.log(response2.data);
            console.log(response3.data);
            const obj = response.data.map((e) => {
                return (
                    < tr >
                        <td>{e.delivery_id}</td>
                        <td>{e.doc_name}</td>
                        <td>{e.customer_id}</td>
                        <td>{e.end_customer_id}</td>
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
        <div className='Table'>
            <h2>Newly Created Jobs-I</h2>
            <Form form={form} component={false}>
            <table>
        <th>UUID</th>
        <th>Branch ID</th>
        <th>Deliverer ID</th>
        <th>Customer ID</th>
        {/* <th>Operation</th> */}
        {table_body}
      </table>
    </Form>
        </div>
    )
}

export default JobsIntPendTable;