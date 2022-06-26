import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from "socket.io-client"
import 'antd/dist/antd.css'
import Background from '../images/Chat.jpg'


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
   
   

   ]
     
  return (
    <div   style={{
      backgroundImage: `url(${Background})`
    }} > 
      <div
      style={{
        alignItems:"center"
      }}
      >

         <div>
          <div style={{
        alignItems:"center",
        padding:'10px',
        position:'relative',
        left :'50px',
        top:"20px"
      }} >
         <Link to='/Mail/GetsentMail'>
      <Button type="dashed" >Sent Mails</Button>  
      </Link> 
      </div>
      <div style={{
        alignItems:"center",
        padding:'10px',
        position:'relative',
        left:"50px",
        top:"20px"

      }} >
      <Link to='/Mail/Received'>
       <Button type="dashed">Recieved Mail</Button>
       </Link>
       
       </div>
       <div style={{
        alignItems:"center",
        padding:'10px',
        position:'relative',
        left:"50px",
        top:"20px"

      }} >
      <Link to='/branch/dashboard'>
       <Button type="dashed">Back</Button>
       </Link>
       
       </div>
       </div>
      </div>
      <h2 style={{
            padding : "50px",
             position:'relative',
        left:"50px",
        'font-family': 'Lucida Handwriting'
      }}
      >To send a Mails</h2>
      <Table dataSource={User} columns={columns} onRow={(record, recordIndex) => ({
            onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) 
            localStorage.setItem('reciever_id',record.uuid);
          }
          })}
          style={{
            padding:'20px',
            opacity:'0.6'
          }} ></Table>
    </div>
  )
}

export default Mail