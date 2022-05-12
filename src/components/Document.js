import React, { useState } from 'react'
import {useSelector} from 'react-redux'

function Document() {

 
  return (
    <div>
      <center>
      <div className='addDocument'>
              <div>
              <p>Enter Id of the document</p>
              <input type="number" placeholder="Id"/>
              </div>
              <div>
              <p>Enter name of the document</p>
              <input type="text" placeholder="Name"/>
              </div>
              <div>
              <p>Enter type of the document</p>
              <input type="text" placeholder="Type"/>
              </div>
              <div>
              <p>Enter Added Date of the document</p>
              <input type="text" placeholder="Added Date"/>
              </div>
             
              



      </div>
      <div className='displayDocument'></div>
      </center>

    </div>
  )
}

export default Document