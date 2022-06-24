import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
  
function ReceivedMail() {
    const user_id=localStorage.getItem('uuid');
    const id={user_id}.user_id;
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
    
     
      return response;
    }
    catch(e){
      console.log(e);
    }
            };
  return (
    <div>
         
    </div>
  )
}

export default ReceivedMail