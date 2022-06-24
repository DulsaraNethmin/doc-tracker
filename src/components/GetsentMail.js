import { Card, Space, Table } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function GetsentMail() {
    const [to,setTo]=useState('');
    const user_id=localStorage.getItem('uuid');
    const id={user_id}.user_id;
    const [sent,setSent]=useState([]);
    useEffect(() => {
        try{
          getMail();
        
         
        }catch(e){
          console.log(e);
        }
        console.log(to);
      }, []);
     
      const getMail = async() => {
    try{
      var response = await axios.get(`http://localhost:8080/mail/get/sent?uuid=${id}`);
      console.log(response.data);
      setSent(response.data);
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
           const columns=[
                {
                    title:"Contact",
                    dataIndex:"to_name"
                  },
                  {
                    title:"Head",
                    dataIndex:"head"
                  },
            ]  
  return (
    
    <Table dataSource={sent} columns={columns}></Table>
  )
}

export default GetsentMail