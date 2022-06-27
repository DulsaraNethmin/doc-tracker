import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import "../components/User.css"
import {
  Button,
} from "antd";
import {


  Dropdown,
 
  PageHeader,
  Row,
  Col,
  Card,

  
  Tag,

} from "antd";

import { Layout,Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const originData = [];

const Payments = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const navigate = useNavigate();

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    var data = user_data();
    console.log(data);
    setData();
  }, []);

  const user_data = async () => {
    const navigate = useNavigate();
    // try {
    //   var data = localStorage.getItem("branch_id");

    // //   var response = await axios.get(
    // //     `http://localhost:8080/organization/get/single/branchowners?branch_id=${data}`
    // //   );
    //   //console.log(response.data);
    //   //const obj = response.data.map((e) => {
    //     return {
    //       date: e.b_name,
    //       amount: e.b_number,
    //       job_id: e.b_street,
    //       customer_id: e.b_town,
    //       createdAt: e.name,
    //       updatedAt: e.username,
    //       deliverer_id: e.password,
    //     };
    //   });
    //   setData(obj);
    //   return response.data;
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      //width: '25%',
      editable: true,
    },
    {
      title: "Amount (Rs.)",
      dataIndex: "amount",
      //width: '15%',
      editable: true,
    },
    {
      title: "Job ID",
      dataIndex: "job_id",
      //width: '20%',
      editable: true,
    },
    {
      title: "Customer Name",
      dataIndex: "customer_id",
      //width: '25%',
      editable: true,
    },
    {
      title: "Deliverer Name",
      dataIndex: "deliverer_id",
      //width: '25%',
      editable: true,
    },
    {
      title: "Job Created Date",
      dataIndex: "createdAt",
      //width: '25%',
      editable: true,
    },
    {
      title: "Updated Date",
      dataIndex: "updatedAt",
      //width: '25%',
      editable: true,
    },
  ];

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    };
  });

  return (
    <div className="main-container">
      
      <PageHeader
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        //ghost={false}
        //onBack={() => window.history.back()}
        title="DocTracker"
        subTitle="Branch Mode"
        extra={[
          <Button
            key="3"
            onClick={async (e) => {
              e.preventDefault();
              navigate("/branch/customer/create");
            }}


          >
            Create New Customer
          </Button>,
          <Button
            key="2"
            onClick={async (e) => {
              e.preventDefault();
              navigate("/branch/deliverer/create");
            }}

          >
            Create New Deliverer
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
      <h2>Payment Details</h2>
      <Form form={form} component={false}>
        <Table
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </Form>
    </div>
  );
};

export default Payments;
