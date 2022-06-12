import React, { useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client'

const socket=io("http://localhost:8000");

function AdminMail() {
  const [massage,setMassage]=useState("");
  const addmail=(e)=>{
    e.preventDefault();
      console.log(massage);
      try{
      socket. emit('mail',{massage})
      }catch(e){
        console.log(e)
      }

      setMassage('');
  }
  
  
  
  return (
    <div>
      <label>Enter a massage</label>
      <input type="text" value={massage} onChange={(event)=>setMassage(event.target.value)} />
      <button type='submit' onClick={addmail}> Send</button>
    </div>
  )
}

export default AdminMail