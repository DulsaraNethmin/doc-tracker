import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import document from '../features/doucument'

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
  const document=useSelector((state)=>state.documents)
  useEffect(() => {
  
      dispatch(fetchDocuments())
  }, [])
  

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
            <p>Enter Added Department of the document</p>
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
          <p>
            {document.status==="pending"&&<div>Loading</div>}
            {document.status==="Success"&&<div>
              {
                document.status
              }

            </div>}
          </p>
        </div>
      

    </div>
     

     


  )
}

export default Document

