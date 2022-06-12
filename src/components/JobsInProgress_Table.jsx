import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import "../components/Job.css"
import {useNavigate} from "react-router-dom"
const originData = [];


const JobsInProgress_Table = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();

  const isEditing = (record) => record.key === editingKey;

  useEffect(()=>{
    var data=user_data();
    console.log(data);
    setData()
  },[])

  const user_data=async()=>{
    try{
      console.log('aaaaaa');
      var response=await axios.get('http://localhost:8080/user/get/all?branch_id=1356d36d-05ca-4a50-98bf-5a941355f418');
      console.log(response.data);
      const obj=response.data.map((e)=>{
        return(
          {
            "key":1,
            "name":e.name,
            "Usrname":e.username, 
            "email":e.email,
            "Job role":e.role,
            "address":'London Park no'
          }
        );
      })
      setData(obj);
      return response.data;
    }catch(e){
      console.log(e);
    }
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
      editable: true,
    },
    {
      title: 'Admin ID',
      dataIndex: 'admin_id',
      width: '10%',
      editable: true,
    },
    {
      title: 'Deliverer ID',
      dataIndex: 'deliverer_id',
      width: '10%',
      editable: true,
    },
    // {
    //     title: 'Job role',
    //     dataIndex: 'Job role',
    //     width: '25%',
    //     editable: true,
    //   },
      {
        title: 'Customer ID',
        dataIndex: 'customer_id',
        width: '10%',
        editable: true,
      },

      {
        title: 'Document ID',
        dataIndex: 'customer_id',
        width: '10%',
        editable: true,
      },
      {
        title: 'Created date',
        dataIndex: 'customer_id',
        width: '10%',
        editable: true,
      },
    {
      title: 'Tracking',
      // dataIndex: 'Profile',
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
            Show
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    };
  });

  return (
    <div className='Table'>
      
        <h2>User details</h2>
        <Form form={form} component={false}>
      <Table
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
    </Form>
    </div>
  )
}

export default JobsInProgress_Table;