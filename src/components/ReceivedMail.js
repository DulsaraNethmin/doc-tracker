import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
  
function ReceivedMail() {
    const user_id=localStorage.getItem('uuid');
    const id={user_id}.user_id;
    const [receivemsg,setReceivemsg]=useState([]);
    useEffect(() => {
        try{
          getReceivedMails();
         
        }catch(e){
          console.log(e);
        }
        
      }, []);
     
      const getReceivedMails = async() => {
    try{
      var response = await axios.get(`http://localhost:8080/mail/get/received?uuid=${id}`);
      console.log(response.data);
      setReceivemsg(response.data);
     
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
            const column=[
                {
                    title:"Contact",
                    dataIndex:"from_name"
                  },
                  {
                    title:"Head",
                    dataIndex:"head"
                  },
                  {
                    title:"Body",
                    dataIndex:"body"
                  }


            ]
  return (
    <div>
       <Table dataSource={receivemsg} columns={column}></Table>        
    </div>
  )
}

export default ReceivedMail