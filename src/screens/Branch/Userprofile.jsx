// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import "../Auth/pages.css";

// import {
//     Form,
//     Input,
//     Button,
//     DatePicker,
//     Row,
//     Col,
//     Card,
//     Image
// } from 'antd';
// import { useNavigate } from "react-router-dom"
// // import "../components/User.css"
// const originData = [];
// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };


// const { RangePicker } = DatePicker;
// const { TextArea } = Input;


// const UserData = async() => {

//     const {user_id}=useParams();
//     var id=user_id.split('=')[1];
//     var response = await axios.get(`http://localhost:8080/user/get/single?user_id=${id}`);
//     console.log(response.data[0]);
//     var user_data=response.data[0];
//     const onFinish = (values) => {
//         console.log(values);
//     };



//     const [componentSize, setComponentSize] = useState('default');

//     const onFormLayoutChange = ({ size }) => {
//         setComponentSize(size);
//     };
//     const [form] = Form.useForm();
//     const [data, setData] = useState(originData);
//     const [editingKey, setEditingKey] = useState('');
//     const navigate = useNavigate();

//     const isEditing = (record) => record.key === editingKey;

//     const validateMessages = {
//         required: '${label} is required!',
//         types: {
//             email: '${label} is not a valid email!',
//             number: '${label} is not a valid number!',
//         },
//         number: {
//             range: '${label} must be between ${min} and ${max}',
//         },
//     };

// };

// const UserProfile =()=>{

// }

// export default () => <UserData />;




import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import React, { useState ,useEffect} from 'react';
// import "../components/User.css"
import {useNavigate} from "react-router-dom"
const originData = [];

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
  /* eslint-disable no-template-curly-in-string */
  
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
  /* eslint-enable no-template-curly-in-string */
  


const UserProfile = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();
  const [Form_body,setForm_body]=useState([]);

  //not
  const isEditing = (record) => record.key === editingKey;

  useEffect(()=>{
    var data=user_data();
    console.log(data);
    setData()
  },[])
  const {user_id}=useParams();
  const user_data=async()=>{
    try{
      console.log('ccccc');
      var id=user_id.split('=')[1];
    var response = await axios.get(`http://localhost:8080/user/get/single?user_id=${id}`);
      const obj=response.data.map((e)=>{
        return(
            
     


        <div>
                 {/* <li> */}
            
            {/* <label>{e.uuid}</label> */}
            {/* <ul>{e.id}</ul> */}
            {/* <ul>{e.name}</ul>
            <ul>{e.username}</ul>
            <ul>{e.email}</ul>
            <ul>{e.telephone}</ul>
            <ul>{e.role}</ul> */}
            {/* <td><span onClick={()=>{ navigate(`/user/profile/user_id=${e.uuid}`,{replace:true,state:{name:e.name,username:e.username,email:e.email,role:e.role}})}}
            >Edit</span></td> */}
          {/* </li> */}



          
             <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

             <Form.Item
        name={['user', 'UUID']}
        label="UUID"
      >
      <label>{e.uuid}</label>
      
      </Form.Item>

      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >  <p>{e.name}</p>
        {/* <Input  placeholder={e.name}/> */}
      </Form.Item>
              <Form.Item
        name={['user', 'username']}
        label="Username"

      >
        <Input placeholder={e.username}/>
      </Form.Item>


      
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input placeholder={e.email}/>
      </Form.Item>
      <Form.Item
        name={['user', 'telephone']}
        label="Telephone"

      >
        <Input placeholder={e.telephone}/>
      </Form.Item>

      <Form.Item
        name={['user', 'role']}
        label="Role"

      >
        <Input placeholder={e.role}/>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
        );
      })
      setData(obj);
      setForm_body(obj);
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
    // {
    //   title: 'Profile',
    //   dataIndex: 'Profile',
    //   render: (_, record,obj) => {
    //     const id=obj.id;
    //     const editable = isEditing(obj.id);
    //   <></>
    //     );}
    // },
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
      {/* <table>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th> */}
        {/* <th>Operation</th> */}
        {Form_body}
      {/* </table> */}
    </Form>
    </div>
  )
}

export default UserProfile;



