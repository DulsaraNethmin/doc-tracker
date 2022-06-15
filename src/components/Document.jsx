import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { addDocument, documentAdd } from '../features/doucument'
import { useEffect } from "react"


import { getDocumentStatus, fetchDocuments } from '../features/doucument'
import DocumentList from './DocumentList'
import { Link } from 'react-router-dom'
import './'

function Document() {
  const dispatch = useDispatch();

  const [adddoc, setAdddoc] = useState({
    doc_name: "",
    type: "",
    date: "",
    department_id: ""
  });
  const [validat, setvalidat] = useState({})
  const [isSubmit, setisSubmit] = useState(false);  
  const [isError, setisError] = useState(false);

  const getdocument = useSelector(state => state.documents);
  useEffect(() => {

    dispatch(fetchDocuments())
  }, [dispatch]);
  
  useEffect(() => {
    console.log(validat);
    if(Object.keys(validat).length===0 && isSubmit){
          
    }
    else
    {
      setisError(true);
    }
  
 
  }, [validat]);
  


  //to get document from reducers
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adddoc)
    //to dispatch

    setvalidat(validationOfDocumentName(adddoc));
    setisSubmit(true);
     if(!isError){
    dispatch(documentAdd(adddoc))
     }
    
    setAdddoc({
      doc_name: "",
      type: "",
      date: "",
      department_id: ""
      
    }
    
    );
    
  }
  
  const validationOfDocumentName=(values)=>{
      const error={};
      
      if(!values.doc_name){
        error.doc_name="doc_name is required";
      }
      if(!values.type){
        error.type="type is required";
      }
      
      if(!values.date){
        error.date="date is required";
      }
      if(!values.department_id){
        error.department_id="department_id is required";
      }
      
      console.log(error);
      
      return error;
  }



  return (

    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <div className='addDocument'>
            <div>
              <p>Enter name of the document</p>
              <input type="text" placeholder="Name" value={adddoc.doc_name} onChange={(event) => {
                setAdddoc({ ...adddoc, doc_name: event.target.value });
              }}  />
            </div>
            <p>{validat.doc_name}</p>
            <div>
              <p>Enter type of the document</p>
              <input type="text" placeholder="Type" value={adddoc.type} onChange={(event) => {
                setAdddoc({ ...adddoc, type: event.target.value });
              }} />
            </div>
            <p>{validat.type}</p>
            <div>
              <p>Enter Added Date of the document</p>
              <input type="date" placeholder="Added Date" value={adddoc.date} onChange={(event) => {
                setAdddoc({ ...adddoc, date: event.target.value });
              }} />
            </div>
            <p>{validat.date}</p>
            <div>
              <p>Enter Added Department_ID of the document</p>
              <input type="text" placeholder="Added Date" value={adddoc.department_id} onChange={(event) => {
                setAdddoc({ ...adddoc, department_id: event.target.value });
              }} />
            </div>
            <p>{validat.department_id}</p>
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

