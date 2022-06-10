import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import "../components/User.css"
import {useNavigate} from "react-router-dom"
const originData = [];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     Usrname: 32,
//     address: `London Park no. ${i}`,
//   });
// }

const UserTable = () => {
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
      title: 'Profile',
      dataIndex: 'Profile',
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile')}>
            View
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

export default UserTable