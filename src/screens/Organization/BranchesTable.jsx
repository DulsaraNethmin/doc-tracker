import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import "../components/User.css"
import { useNavigate } from "react-router-dom";
const originData = [];

const BranchesTable = () => {
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
    try {

      var data = localStorage.getItem("organization_id");

      var response = await axios.get(
        `http://localhost:8080/organization/get/branchowners?organization_id=${data}`
      );
      //console.log(response.data);
      const obj = response.data.map((e) => {
        return {
          Branch_Name: e.b_name,
          Address1: e.b_number,
          Address2: e.b_street,
          Address3: e.b_town,
          Br_Owner: e.name,
          Br_Owner_Username: e.username,
          Br_Owner_Password: e.password,
          email:e.email,
          telephone:e.telephone,
          longitude:e.longitude,
          latitude:e.latitude
        };
      });
      setData(obj);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
      {
        title: "Branch Name",
        dataIndex: "Branch_Name",
        //width: '25%',
        editable: true,
      },
      {
        title: "Address1",
        dataIndex: "Address1",
        //width: '15%',
        editable: true,
      },
      {
        title: "Address2",
        dataIndex: "Address2",
        //width: '20%',
        editable: true,
      },
      {
        title: "Address3",
        dataIndex: "Address3",
        //width: '25%',
        editable: true,
      },
      {
        title: "Latitude",
        dataIndex: "latitude",
        //width: '25%',
        editable: true,
      },
      {
        title: "Longitude",
        dataIndex: "longitude",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Telephone",
        dataIndex: "telephone",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Email",
        dataIndex: "email",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner",
        dataIndex: "Br_Owner",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner Username",
        dataIndex: "Br_Owner_Username",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner Password",
        dataIndex: "Br_Owner_Password",
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
    <div>
      <h2>Branch Details</h2>
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

export default BranchesTable;

