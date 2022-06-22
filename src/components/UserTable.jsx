import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import "../components/User.css"
import {useNavigate} from "react-router-dom"
const originData = [];


const UserTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();
  const [table_body,settable_body]=useState([]);

  const isEditing = (record) => record.key === editingKey;

  useEffect(()=>{
    var data=user_data();
    console.log(data);
    setData()
  },[])

  const user_data=async()=>{
    try{
      console.log('aaaaaa');
      var response=await axios.get(`http://localhost:8080/user/get/all?branch_id=${localStorage.getItem("branch_id")}`);
      console.log(response.data);
      const obj=response.data.map((e)=>{
        return(
          <tr>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.role}</td>
            <td><span onClick={()=>{ navigate(`/user/profile/user_id=${e.uuid}`,{replace:true,state:{name:e.name,username:e.username,email:e.email,role:e.role}})}}
            >Edit</span></td>
          </tr>
        );
      })
      setData(obj);
      settable_body(obj);
      return response.data;
    }catch(e){
      console.log(e);
    }
  }
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
      title: 'Profile',
      dataIndex: 'Profile',
      render: (_, record,obj) => {
        const id=obj.id;
        const editable = isEditing(obj.id);
        return (
          // <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
          //   View
          // </Typography.Link>
          <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
          View
        </Typography.Link>
        );}
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

      {/* <Table
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
         pagination={true}
      >


      </Table> */}
      <table>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Operation</th>
        {table_body}
      </table>
    </Form>
    </div>
  )
}

export default UserTable;




/*

import { Form, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import "../components/User.css"
import {useNavigate} from "react-router-dom"
const originData = [];


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
           "uuid":e.uuid,
            "name":e.name,
            "Usrname":e.username, 
            "email":e.email,
            "Job role":e.role,
            
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
      dataIndex: 'uuid',
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
      title: 'Profile',
      dataIndex: 'Profile',
      render: (_, record,obj) => {
        const uuid = obj.uuid;
        const editable = isEditing(obj.uuid);
        return (
          // <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
          //   View
          // </Typography.Link>
          <Typography.Link disabled={editingKey !== ''} onClick={() => navigate(`/user/profile/${uuid}`,{state:{}})}>
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
         pagination={true}
      />
    </Form>
    </div>
  )
}

export default UserTable
*/