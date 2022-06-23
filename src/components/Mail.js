import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from "socket.io-client"


const socket=io.connect('http://localhost:8000/');

function Mail() {
  const branch_id=localStorage.getItem('branch_id');
  const id={branch_id}.branch_id;
  console.log(id);
  const [User,setUsers]=useState([]);
  useEffect(() => {
    try{
      UserProfile();
      console.log(User);
    }catch(e){
      console.log(e);
    }
    console.log(User);
  }, []);
  
  const UserProfile = async() => {
try{
  var response = await axios.get(`http://localhost:8080/user/get/all?branch_id=${id}`);
  console.log(response.data);
  setUsers(response.data);
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
    {
      title:"Branch_Name",
      dataIndex:"branch"
    },
    {
      title:"Send Mails",
      render:(record)=>{
        return(
          <Link to='/Mail/Send'>
       <Button>Send Mail</Button>
       </Link>
      )
      

    
      
    }
    
      
    },
    {
      title:"Recieved Mails",
      render:(record)=>{
        return(
          <Link to='/Mail/Received'>
       <Button>Recieved Mail</Button>
       </Link>
      )
      

    
      
    }
    
      
    },
   

   ]
     
  return (
    <div>   
      <Table dataSource={User} columns={columns} onRow={(record, recordIndex) => ({
            onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) 
            localStorage.setItem('user_id',record.uuid);
          }
          })}
      ></Table>
    </div>
  )
}

export default Mail