import { Input } from 'antd'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function SendMail() {
    const [Receiver, setReceiver] = useState('');
    const receiver_id=localStorage.getItem('receiver_id');
    const id={receiver_id}.receiver_id;
    console.log(id);
    useEffect(() => {
        try{
          UserProfile();
          console.log(Receiver);
        }catch(e){
          console.log(e);
        }
        console.log(Receiver);
      }, []);
     
      const UserProfile = async() => {
    try{
      var response = await axios.get(`http://localhost:8080/user/get/all?branch_id=${id}`);
      console.log(response.data);
      setReceiver(response.data);
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
  return (
    <div>
        <Input>Enter a Massage</Input>
    </div>
  )
}

export default SendMail