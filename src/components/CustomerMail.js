import React, { useState } from 'react'
import io from 'socket.io-client'

function CustomerMail() {
    const [mail,setMail]=useState("");
    

  return (
    <div>
        <label>Enter the Mail To Customer</label>
        <div>
              <p>Enter Added Department_ID of the document</p>
              <input type="text" placeholder="Mail" onChange={(event) => {
                setMail(event.target.value);
              }} />
            </div>
         
    </div>
  )
}

export default CustomerMail