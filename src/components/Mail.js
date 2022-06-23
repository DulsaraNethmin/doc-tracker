import { Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import io from "socket.io-client"


const socket=io.connect('http://localhost:8000/');

function Mail() {
  const branch_id=localStorage.getItem('branch_id');
  const id={branch_id}.branch_id;
  console.log(id);
  const [user,setUsers]=useState([]);
  useEffect(() => {
    setUsers(UserProfile())
    console.log(user);
  }, [])

  const UserProfile = async() => {

    var response = await axios.get(`http://localhost:8080/user/get/all?branch_id=${id}`);
    console.log(response.data);
    return response.data;
        };

   const columns=[
    {
      title:"Name",
      dataIndex:"name"
    },
   ]
     
  return (
    <div>   
      <Table dataSource={user} columns={columns}></Table>
    </div>
  )
}

export default Mail