import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function SendMail() {
    const [Receiver, setReceiver] = useState([]);
  
    const [image,setImage]=useState('');
    const [to,setTo]=useState('');
    const [mail,setMail]=useState('');
    const [head,setHead]=useState('');
    const [from,setFrom]=useState('');
    const [sender,setSender]=useState('');
    const [seen,setSeen]=useState(false);
    const sender_id=localStorage.getItem('uuid');
    const sid={sender_id}.sender_id;;
    const receiver_id=localStorage.getItem('reciever_id');
    const id={receiver_id}.receiver_id;
    const [addmail, setAddmail] = useState({
        head: "",
        body: "",
        seen:false,
        to: {receiver_id}.receiver_id,
        from:{sender_id}.sender_id,
    
      });
    
    useEffect(() => {
        try{
          receiverProfile();
         
        }catch(e){
          console.log(e);
        }
        console.log(to);
      }, []);
     
      const receiverProfile = async() => {
    try{
      var response = await axios.get(`http://localhost:8080/user/get/single?user_id=${id}`);
      console.log(response.data);
      setReceiver(response.data);
      response.data.map((e)=>{
        setTo(e.uuid);
        setSender(e.name);
        setImage(e.image_url);
      })
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
            

     const handleMassage=()=>{
        console.log(addmail);
        setSeen(true);
        sendAddMail();


     }    
     const sendAddMail=async()=>{
        try{
            const response=await axios.post('http://localhost:8080/mail/add',addmail)
            console.log(response.data);
             return response.data
           }catch(err){
               console.log(err);
              
           }
     }
     

  return (
    <div>
         <h2>{sender}</h2>  
         <img src={image} width="160" height="145"/>
         <div>
         <h4 >Enter Head</h4>
         <TextArea rows={2}  size="small" placeholder="Head" vonChange={(event) => {
                setAddmail({ ...addmail, head: event.target.value });
              }} />

            <h4 >Enter Mail</h4>
         <TextArea rows={4}  size="small" placeholder="Mail" onChange={(event) => {
                setAddmail({ ...addmail, body: event.target.value });
              }} />
              <Button onClick={handleMassage} >Send</Button> 
          </div> 
          
         
    </div>
  )
}

export default SendMail