import { Input } from 'antd'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function SendMail() {
    const [Receiver, setReceiver] = useState([]);
    const [image,setImage]=useState('');
    const [name,setName]=useState('');
    const receiver_id=localStorage.getItem('reciever_id');
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
       
      var response = await axios.get(`http://localhost:8080/user/get/single?user_id=${id}`);
      console.log(response.data);
      setReceiver(response.data);
      response.data.map((e)=>{
        setName(e.name);
        setImage(e.image_url);
      })
      console.log(name);
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
  return (
    <div>
         <h2>{name}</h2>  
         <img src={image} height="100px" width='100px'/>
         <div>
            <h4 >Enter Mail</h4>
         <Input/> 
         
          </div> 
         
    </div>
  )
}

export default SendMail