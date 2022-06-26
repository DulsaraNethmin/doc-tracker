import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Background from '../images/Chat.jpg'
import Nightmode from '../images/NightMode.jpg'
const io = require("socket.io-client");



 let socket;
function SendMail() {
    
    const [Receiver, setReceiver] = useState([]);
  
    const [image,setImage]=useState('');
    const [to,setTo]=useState('');
  
    const [from,setFrom]=useState('');
    const [sender,setSender]=useState('');
    const [seen,setSeen]=useState(false);
    const sender_id=localStorage.getItem('uuid');
    const sid={sender_id}.sender_id;;
    const receiver_id=localStorage.getItem('reciever_id');
    const id={receiver_id}.receiver_id;
    const branch_id=localStorage.getItem('branch_id');
    const bid={branch_id}.branch_id;
    const M=localStorage.getItem('mode');
    const m={M}.M;
    const [Mo,setmo]=useState(m);
    console.log(Mo);
    const [addmail, setAddmail] = useState({
        head: "",
        body: "",
        time:(moment().format("YYYY-MM-DD hh:mm:ss")),
        seen:false,
        to: {receiver_id}.receiver_id,
        from:{sender_id}.sender_id,
    
      });

    
    useEffect(() => {
     
      
        try{
            socket= io("http://localhost:4000");
            try{
            socket.emit('signin',{  id: sid, branch_id: bid });
            }catch(e){
                console.log(e);
            }

            receiverProfile();
           
          }catch(e){
            console.log(e);
          }
        // return ()=>
        // {
        //     socket.emit('disconnect');
        //     socket.off();
        // }

        
        // socket.emit('signin',{ "id": sid, "branch_id":bid });
        // console.log(to);
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
            
            const getDe=()=>{
                const ti= (moment().format("YYYY-MM-DD hh:mm:ss"))
              
                return (moment().format("YYYY-MM-DD hh:mm:ss"));
             }       
     const handleMassage=()=>{
    
        setSeen(true);
        
        sendAddMail();
        socket.
        setAddmail({
            head: "",
            body: "",
            
            
          }
          
          );  
       
     }  
   
   

   
     const sendAddMail=async()=>{
        try{
            
             
               const t=await getDe(); 
               setAddmail({ ...addmail,time:t
        
               });
              console.log(addmail);
            const response=await axios.post('http://localhost:8080/mail/add',addmail)
            console.log(response.data);
             return response.data
           }catch(err){
               console.log(err);
              
           }
     }
     

  return (
    <div>
         {Mo === "day" && 
    <div style={{
        padding : "50px",
        backgroundImage: `url(${Background})`
     }}>
         <h2>{sender}</h2>  
         <p style={{
            width:"150px",
            height:"150px"
         }}>
         <img src={image} width="160" height="145"/>
         </p>
         <div>
         <h4 >Enter Head</h4>
         <form>
         <TextArea rows={2}  size="small" placeholder="Head"  value={addmail.head} onChange={(event) => {
                setAddmail({ ...addmail, head: event.target.value });
               
              }} 
              style={{
                opacity:'0.6'
              }} />

            <h4 >Enter Mail</h4>
         <TextArea rows={4}  size="small" placeholder="Mail" defaultValue={addmail.body} onChange={(event) => {
                setAddmail({ ...addmail, body: event.target.value });
                
              }}
              style={{
                opacity:'0.6'
              }} />
              <Button  style={{
                opacity:'0.6',
                position:'relative',
                top:'20px'
              }}  onClick={handleMassage} >Send</Button> 
              </form>
             
          </div> 
          <Link to='/Mail/GetsentMail'>
              <Button  style={{
                opacity:'0.6',
                position:'relative',
                top:'40px'
              }} > Sent Mails</Button>
              </Link>
         
    </div>
}
{Mo === "night" && 
    <div style={{
        padding : "50px",
        backgroundImage: `url(${Nightmode})`
     }}>
         <h2 style={{
            color:'White'
         }} >{sender}</h2>  
         <p style={{
            width:"150px",
            height:"150px"
         }}>
         <img src={image} width="160" height="145"/>
         </p>
         <div >
         <h4 style={{
            color:'White'
         }}>Enter Head</h4>
         <form>
         <TextArea rows={2}  size="small" placeholder="Head"  value={addmail.head} onChange={(event) => {
                setAddmail({ ...addmail, head: event.target.value });
               
              }} 
              style={{
                opacity:'0.6'
              }} />

            <h4  style={{
            color:'White'
         }}>Enter Mail</h4>
         <TextArea rows={4}  size="small" placeholder="Mail" defaultValue={addmail.body} onChange={(event) => {
                setAddmail({ ...addmail, body: event.target.value });
                
              }}
              style={{
                opacity:'0.6'
              }} />
              <Button  style={{
                opacity:'0.6',
                position:'relative',
                top:'20px'
              }}  onClick={handleMassage} >Send</Button> 
              </form>
             
          </div> 
          <Link to='/Mail/GetsentMail'>
              <Button  style={{
                opacity:'0.6',
                position:'relative',
                top:'40px'
              }} > Sent Mails</Button>
              </Link>
         
    </div>
}
   
    </div>
  )
}

export default SendMail