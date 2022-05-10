import React, { useState } from 'react'
import './button.css'
function Button() {
    const [stat,setStat]=useState('Click this if you have already read');
    const handleChange=()=>{
        if(stat=='Click this if you have already read'){
            setStat('You have already read');
        }
        else{
            setStat('Click this if you have already read');
        }
    }
  return (
    <div>
        <div className='button'>
            {stat}
            <button onClick={handleChange}> Click me</button>
        </div>
    </div>
  )
}

export default Button