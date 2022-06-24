import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function SendMail() {
    const [Receiver, setReceiver] = useState([]);
    const [image,setImage]=useState('');
    const [name,setName]=useState('');
    const [mail,setMail]=useState('');
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
     const handleMassage=()=>{
        console.log(mail);
     }    
        

  return (
    <div>
         <h2>{name}</h2>  
         <img src={image} width="160" height="145"/>
         <div>
            <h4 >Enter Mail</h4>
         <TextArea rows={4}  size="small" placeholder="Mail" onChange={(event) => {
                setMail(event.target.value);
              }}/>
              <Button onClick={handleMassage} >Send</Button> 
          </div> 
         
    </div>
  )
}

export default SendMail