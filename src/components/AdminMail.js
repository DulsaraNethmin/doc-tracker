import React, { useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client'

const socket=io.connect('http://localhost:4000');
const userName='User'+parseInt(Math.random()*10);

function AdminMail() {
  const [massage,setMassage]=useState("");
  const [returnmail, setreturnmail] = useState([]);
  const addmail=(e)=>{
    e.preventDefault();
      console.log(massage);
      try{
      socket.emit('mail',{massage,userName})
      }catch(e){
        console.log(e)
      }

    
  }
  useEffect(() => {
    socket.on('message',payload=>{
      console.log(payload);
      setreturnmail([...returnmail,payload]);
    })
  })
  
  
  
  
  return (
    <div>
      <form onSubmit={addmail}>
      <label>Enter a massage</label>
      <input type="text" placeholder='Enter a massage' value={massage} required onChange={(event)=>setMassage(event.target.value)} />
      <button type='submit' > Send</button>
      </form>
      {console.log(returnmail)}
      {returnmail.map((payload,index)=>{
        return(
          <p>{payload.userName}:{payload.massage}</p>
        )
      })}

    </div>
  )
}

export default AdminMail