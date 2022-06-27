import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import "../screens/Branch/pages.css"
import {useNavigate} from "react-router-dom";
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


const UserTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();
  const [table_body,settable_body]=useState([]);

  //not
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
            <td>{e.uuid}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.role}</td>
           
            
            <td><span onClick={()=>{
               localStorage.setItem('uuid',e.uuid);
               navigate(`/user/profile/user_id=${e.uuid}`,{replace:true,state:{uuid:e.uuid,name:e.name,username:e.username,email:e.email,role:e.role,telephone:e.telephone}})}}
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
        //   <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
        //   View
        // </Typography.Link>
      <></>
        );}
    },
  ];
  const mergedColumns = columns.map((col) => {
    return {
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
      <div >
      <table className='table'>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
       
        <th>Operation</th>
        {table_body}
      </table>
      </div>
     
    </Form>
    </div></div>
  )
}

export default UserTable;



