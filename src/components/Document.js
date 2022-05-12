import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import doucument from '../features/doucument'

function Document() {
   const documentList=useSelector((state)=>state.documents.value)
 
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
              <div  >
              <button>Add Document</button>
              </div>

      </div>
      <div className='displayDocument'>
        {documentList.map((document)=>{
          return(
            <div>
              <table>
  <tr>
    <th>ID</th>
    <th>Document_Name</th>
    <th>Type</th>
    <th>Date Added</th>
  </tr>
  <td>
    <tr>{document.id}</tr>
  </td>
  <td>
    <tr>{document.doc_name}</tr>
  </td>
  <td>
    <tr>{document.type}</tr>
  </td>
  <td>
    <tr>{document.Added_date}</tr>
  </td>


</table>

            </div>
          )
        })}
      </div>
      </center>

    </div>
  )
}

export default Document