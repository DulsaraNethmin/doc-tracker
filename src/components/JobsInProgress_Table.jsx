import { Form, Input, InputNumber, Popconfirm, Table, Typography, Row, Col } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../components/Job.css"
import { useNavigate } from "react-router-dom"
import Sidebar from './Sidebar';
const originData = [];


const JobsInProgress_Table = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const navigate = useNavigate();

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    var data = user_data();
    console.log(data);
    setData()
  }, [])

  const user_data = async () => {
    try {
      console.log('aaaaaa');
      var response = await axios.get('http://localhost:8080/user/get/all?branch_id=1356d36d-05ca-4a50-98bf-5a941355f418');

      console.log(response.data);
      const obj = response.data.map((e) => {
        return (
          {
            "key": 1,
            "id": e.ID,
            "Admin ID": e.admin_id,
            "Deliverer ID": e.deliverer_id,
            "Customer ID": e.customer_id,
            "Document ID": e.customer_id,
            "Created date": e.createdAt
          }
        );
      })
      setData(obj);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '15%',
      editable: false,
    },
    {
      title: 'Admin ID',
      dataIndex: 'admin_id',
      width: '15%',
      editable: false,
    },
    {
      title: 'Deliverer ID',
      dataIndex: 'deliverer_id',
      width: '15%',
      editable: false,
    },

    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      width: '15%',
      editable: false,
    },

    {
      title: 'Document ID',
      dataIndex: 'doc_id',
      width: '15%',
      editable: false,
    },
    {
      title: 'Created date',
      dataIndex: 'createdAt',
      width: '15%',
      editable: false,
    },
    {
      title: 'Tracking',
      // dataIndex: 'Profile',
      render: (_, record) => {
        const editable = isEditing(record);
        return (
         <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/JobTracking', { state: {} })}>
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
    <div >

      <h2>Jobs in Progress</h2>
      <Row>  <Col flex={0.5}>  <Sidebar /></Col>
      <Col flex={10}> <Form form={form} component={false}>
        <Table
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </Form></Col>
          </Row>
     
    </div>
  )
}

export default JobsInProgress_Table;