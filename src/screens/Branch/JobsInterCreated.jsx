import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import "../components/User.css"
import { useNavigate } from "react-router-dom";
import { Space, Tag } from 'antd';
import "./dashboard.css"

const { Column, ColumnGroup } = Table;
const originData = [];

const JobsInterCreated = () => {
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
            // var response2 = await axios.get(`http://localhost:8080/job/get/all/openpending?branch_id=${localStorage.getItem("branch_id")}`);
            //var response3 = await axios.get(`http://localhost:8080/user/get/deliverer?branch_id=${localStorage.getItem("branch_id")}`);
            console.log(response.data);
            // console.log(response2.data);
            //console.log(response3.data);
            const obj = response.data.map((e) => {
                return (
                    < tr >
                        <td>{e.customer_name}</td>
                        <td>{e.doc_id}</td>
                        <td>{e.doc_name}</td>
                        <td>{e.end_customer_name}</td>
                        {/* <td>{e.end_customer_id}</td> */}
                        <td><span onClick={()=>{
               localStorage.setItem('doc_id',e.doc_id);
               navigate(`/branch/jobs/int/new/show=${e.doc_id}`,{replace:true,state:{doc_id:e.doc_id,customer_id:e.customer_id,customer_name:e.customer_name,delivery_id:e.delivery_id,doc_id:e.doc_id,doc_name:e.doc_name,end_custmer_id:e.end_custmer_id,end_customer_name:e.end_customer_name,job_id:e.job_id}})}}
            >View</span></td>
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
            title: 'Customer Name',
            dataIndex: 'customer_name',
            width: '25%',
            editable: true,
        },
        {
            title: 'Document ID',
            dataIndex: 'doc_id',
            width: '15%',
            editable: true,
        },
        {
            title: 'Document Name',
            dataIndex: 'doc_name',
            width: '15%',
            editable: true,
        },
        {
            title: 'Receiving Customer',
            dataIndex: 'end_customer_name',
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
        <div className='BG'>
            <h2>Newly Created Jobs-I</h2>
            <Form form={form} component={false}>
            <table className='tables'>
        <th>Customer Name</th>
        <th>Document ID</th>
        <th>Document Name</th>
        <th>Receiving Customer</th>
        <th>More details</th>
        {/* <th>Customer ID</th> */}
        {/* <th>Operation</th> */}
        {table_body}
      </table>
    </Form>
        </div>
    )
}

export default JobsInterCreated;