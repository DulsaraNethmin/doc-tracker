import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { addDocument, documentAdd } from '../features/doucument'
import { useEffect } from "react"


import { getDocumentStatus, fetchDocuments } from '../features/doucument'
import DocumentList from './DocumentList'
import { Link } from 'react-router-dom'

function Document() {
  const dispatch = useDispatch();

  const [adddoc, setAdddoc] = useState({
    doc_name: "",
    type: "",
    date: "",
    department_id: ""
  });

  const getdocument = useSelector(state => state.documents);
  useEffect(() => {

    dispatch(fetchDocuments())
  }, [dispatch]);



  //to get document from reducers
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adddoc)
    //to dispatch
    dispatch(documentAdd(adddoc))

    setAdddoc({
      doc_name: "",
      type: "",
      date: "",
      department_id: ""
      
    }
  
    );
    
  }




  return (

    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <div className='addDocument'>
            <div>
              <p>Enter name of the document</p>
              <input type="text" placeholder="Name" onChange={(event) => {
                setAdddoc({ ...adddoc, doc_name: event.target.value });
              }} />
            </div>
            <div>
              <p>Enter type of the document</p>
              <input type="text" placeholder="Type" onChange={(event) => {
                setAdddoc({ ...adddoc, type: event.target.value });
              }} />
            </div>
            <div>
              <p>Enter Added Date of the document</p>
              <input type="text" placeholder="Added Date" onChange={(event) => {
                setAdddoc({ ...adddoc, date: event.target.value });
              }} />
            </div>
            <div>
              <p>Enter Added Department_ID of the document</p>
              <input type="text" placeholder="Added Date" onChange={(event) => {
                setAdddoc({ ...adddoc, department_id: event.target.value });
              }} />
            </div>
            <div  >
            
              <button type='submit' >Add Document</button>
              <Link to='/documents/viewdoc'>
              <button>Show new addedd ones</button>
              </Link>
            </div>

          </div>
        </form>
      </center>
      <DocumentList />
    </div>
  )
}

export default Document

