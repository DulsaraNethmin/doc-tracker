import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import doucument from '../features/doucument'
import {addDocument} from '../features/doucument'

function Document() {
  const dispatch=useDispatch();
  const documentList=useSelector((state)=>state.documents.value);
  const [department_id,setDepartmentid]=useState();
  const [doc_name,setDoc_name]=useState("");
  const [type,setType]=useState("");
  const [Added_date,setAdded_date]=useState("");
 
  return (
    <div>
      <center>
      <div className='addDocument'>
              <div>
              <p>Enter name of the document</p>
              <input type="text" placeholder="Name" onChange={(event)=>{
                setDoc_name(event.target.value);
              }}/>
              </div>
              <div>
              <p>Enter type of the document</p>
              <input type="text" placeholder="Type" onChange={(event)=>{
                setType(event.target.value);
              }}/>
              </div>
              <div>
              <p>Enter Added Date of the document</p>
              <input type="text" placeholder="Added Date" onChange={(event)=>{
                setAdded_date(event.target.value);
              }}/>
              </div>
              <div>
              <p>Enter Added Department of the document</p>
              <input type="text" placeholder="Added Date" onChange={(event)=>{
                setDepartmentid(event.target.value);
              }}/>
              </div>


              <div  >
              <button onClick={()=>{dispatch(addDocument({id:id ,doc_name:doc_name ,type:type , Added_date: Added_date}))}}>Add Document</button>
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
    <tr>{document.department_id}</tr>
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