import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Select, Col, Row, Image } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import "../../components/User.css"
import { useNavigate } from "react-router-dom";
import {

  Dropdown,
  PageHeader,

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

const UserProfile = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();
  const [Form_body, setForm_body] = useState([]);
  const use_id=localStorage.getItem('uuid');
  const id={use_id}.use_id
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [telepone, setTelephone] = useState("");
  console.log(id)
  const [update, setUpdate] = useState({
    user_id:{id},
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
      var id = user_id.split('=')[1];
      var response = await axios.get(`http://localhost:8080/user/get/single?user_id=${id}`);
      const obj = response.data.map((e) => {
        return (
          
          <div className='Form' 
          // style={{
          //   backgroundImage:`url('https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            
          // }}
          >

            <Row gutter={[4, 4]}>
              <Col className='col1' span={6}>
                <br /><br /><br />
                <Image
                  width={200}
                  //image_url
                  src={e.image_url}
                />
                <h2>{e.name}</h2>
              </Col>
              <Col span={12}>

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
                                  ><label>{e.name}</label>

                                  {/* <label defaultValue={e.name}  onChange={(event) => {
                  setUpdate({ ...update, Name: event.target.value });}}
                  /> */}

                  </Form.Item>
                  <Form.Item
                    name={['user', 'username']}
                    label="Username"
                    rules={[{ required: true, message: 'Username is required' }]}>

                    <Input defaultValue={e.username} onChange={(event) => {
                      setUpdate({ ...update, Username: event.target.value });
                      setUname(event.target.value)

                    }} />
                  </Form.Item>
                  <Form.Item
                    name={['user', 'email']}
                    label="Email">
                      <label>{e.email}</label>
                    {/* <label defaultValue={e.email} onChange={(event) => {
                      setUpdate({ ...update, Email: event.target.value });
                    }} /> */}
                  </Form.Item>
                  <Form.Item
                    name={['user', 'telephone']}
                    label="Telephone"

                  >
                    <Input defaultValue={e.telephone} onChange={(event) => {
                      setUpdate({ ...update, Telephone: event.target.value });
                    }} />
                  </Form.Item>

                  <Form.Item label="Role">
                    {/* <Select defaultValue={e.role}>
                      <Select.Option value="Customer" onChange={(event) => {
                        setUpdate({ ...update, Role: event.target.value });
                      }}>Customer</Select.Option>
                      <Select.Option value="Deliverer" onChange={(event) => {
                        setUpdate({ ...update, Role: event.target.value });
                      }}>Deliverer</Select.Option>
                    </Select> */}
                    <label htmlFor="">{e.role}</label>
                  </Form.Item>

                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" onClick={
                      ()=>{
                        console.log(uname);
                      }
                    }>
                      Submit
                    </Button>
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
  <div style={{backgroundImage:`url('../../images/background.png') no-repeat;`}}>


      <Form form={form} component={false}>
        {Form_body}
      </Form>
    </div></div>
  )
}

export default UserProfile;



