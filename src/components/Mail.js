import React, { useState } from 'react'
import io from "socket.io-client"
import AdminMail from './AdminMail';
import CustomerMail from './CustomerMail';

const socket=io.connect('http://localhost:8000/');

function Mail() {
   const [role,setRole]=useState();
   function handleAddrTypeChange(e){
    setRole(e.target.value);
    console.log(role);
   }
 
     
  return (
    <div>   
       <label for="mails">Choose a one u want to send the massage:</label>
  <select name="mails" id="mails" onChange={handleAddrTypeChange}>
    <option value="customer" >Customer</option>
    <option value="admin" >Admin</option>
    
  <input type="submit" value="Submit"  ></input>
    
  </select>
       {role==='admin'&&<div>
         <AdminMail/>
         </div>}
         {role==='customer'&&<div>
           <CustomerMail/>
           </div>}
    </div>
  )
}

export default Mail