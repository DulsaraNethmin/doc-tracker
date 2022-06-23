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
  const [User,setUsers]=useState([]);
  useEffect(() => {
    try{
      setUsers(UserProfile())
    }catch(e){
      console.log(e);
    }
   
    console.log(User);
  }, []);
  
  const UserProfile = async() => {
try{
  var response = await axios.get(`http://localhost:8080/user/get/all?branch_id=${id}`);
  console.log(response.data);
  return response;
}
catch(e){
  console.log(e);
}
 
        };

   const columns=[
    {
      title:"Name",
      dataIndex:"name"
    },
   ]
     
  return (
    <div>   
      <Table dataSource={User} columns={columns}></Table>
    </div>
  )
}

export default Mail