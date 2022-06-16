import React, { useState } from 'react'

function Completedbutton() {
    const [stat,setStat]=useState('Not Completed');
    const handleChange=()=>{
        if(stat=='Not Completed'){
            setStat('Completed');
        }
        else{
            setStat('Not Completed');
        }
    }
  return (
    <div>
        <div className='button'>
        
            <button onClick={handleChange}>{stat}</button>
        </div>
    </div>
  )
  
}

export default Completedbutton