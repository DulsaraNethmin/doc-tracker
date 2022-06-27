import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import "../components/User.css"
import { useNavigate } from "react-router-dom";
const originData = [];

const OrganizationTable = () => {
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
        `http://localhost:8080/organization/get/details?organization_id=${data}`
      );
      //console.log(response.data);
      const obj = response.data.map((e) => {
        return {
          Organization_Name: e.o_name,
          Organization_Owner: e.name,
          Org_Owner_Username: e.username,
          Org_Owner_Password: e.password,
          email:e.email,
          telephone:e.telephone
          
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
        title: "Organization Name",
        dataIndex: "Organization_Name",
        //width: '25%',
        editable: true,
      },
      {
        title: "Organization Owner",
        dataIndex: "Organization_Owner",
        //width: '15%',
        editable: true,
      },
      {
        title: "Owner_Username",
        dataIndex: "Org_Owner_Username",
        //width: '20%',
        editable: true,
      },
      {
        title: "Owner Password",
        dataIndex: "Org_Owner_Password",
        //width: '25%',
        editable: true,
      },
      {
        title: "Organization Email",
        dataIndex: "email",
        //width: '25%',
        editable: true,
      },
      {
        title: "Organization Telephone",
        dataIndex: "telephone",
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
      <h2>Organization Details</h2>
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

export default OrganizationTable;

