import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { addDocument } from '../features/doucument'
import { useEffect } from "react"


import {  getDocumentStatus, fetchDocuments } from '../features/doucument'

function Document() {
  const dispatch = useDispatch();
  const stateOFdocument=useSelector(getDocumentStatus);
  const [department_id, setDepartmentid] = useState();
  const [doc_name, setDoc_name] = useState("");
  const [type, setType] = useState("");
  const [Added_date, setAdded_date] = useState("");
  const getdocument=useSelector(state=>state.documents);
  useEffect(() => {
  
      dispatch(fetchDocuments())
  }, [dispatch]);



  //to get document from reducers



   

  return (

    <div>
      <center>
        <div className='addDocument'>
          <div>
            <p>Enter name of the document</p>
            <input type="text" placeholder="Name" onChange={(event) => {
              setDoc_name(event.target.value);
            }} />
          </div>
          <div>
            <p>Enter type of the document</p>
            <input type="text" placeholder="Type" onChange={(event) => {
              setType(event.target.value);
            }} />
          </div>
          <div>
            <p>Enter Added Date of the document</p>
            <input type="text" placeholder="Added Date" onChange={(event) => {
              setAdded_date(event.target.value);
            }} />
          </div>
          <div>
            <p>Enter Added Department_ID of the document</p>
            <input type="text" placeholder="Added Date" onChange={(event) => {
              setDepartmentid(event.target.value);
            }} />
          </div>


          <div  >
            <button onClick={() => { dispatch(addDocument({ department_id: department_id, doc_name: doc_name, type: type, Added_date: Added_date })) }}>Add Document</button>
          </div>

        </div>
      </center>
        <div>
          {getdocument.status==="pending"&&<div>ERROR</div>}
          {getdocument.status==="Success"&&<div>
            {getdocument.Documents.map(doc=>
              <div>
                <table>
  <tr>
    <th>Document_name</th>
    <th>Type</th>
    <th>Date</th>
    <th>Department</th>
    <th>Iscompleted</th>
  </tr>
  <td>
    <tr>{doc.doc_name}</tr>
  </td>
  <td>
    <tr>{doc.type}</tr>
  </td>
  <td>
    <tr>{doc.date}</tr>
  </td>
  <td>
    <tr>{doc.department_id}</tr>
  </td>
  <td>
    <tr>
      <button>Completed</button>
    </tr>
  </td>
</table>
              </div>)}     
            </div>}

          </div>
    </div>
  )
}

export default Document

