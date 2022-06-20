import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect ,useState} from 'react'
import { fetchDocuments } from '../features/doucument';
import { Link } from 'react-router-dom';

import Completedbutton from './Completedbutton';

function DocumentList() {
  const dispatch = useDispatch();


  const getdocument = useSelector(state => state.documents);
  const adddocument = useSelector(state => state.documents);
 
 
  useEffect(() => {
    dispatch(fetchDocuments())
  }, [dispatch]);
  const columns=[
         {
           title:"doc_name",
           dataIndex:"doc_name"
         },
         {
          title:"type",
          dataIndex:"type"
        },
        {
          title:"date",
          dataIndex:"date"
        },
        {
          title:"department_id",
          dataIndex:"document_id"
        },
        {
          title:"issubmit",
          dataIndex:"issubmit"
        }

  ]
  
  const [searchterm, setsearchterm] = useState("");
  return (
    <div>
      <div>
        <input type="text" placeholder='search' onChange={event=>{setsearchterm(event.target.value)}}/>  
        <Link to='/documents'>
          <button>adddocument</button>
        </Link>
        {getdocument.status === "pending" && <div>ERROR</div>}
        {(getdocument.status === "Success" || adddocument.documentAdd === "Succses") &&
          <div>
           
            
            <table >
              <thead>
                <tr>
                  <th>Document_Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Department_id</th>
                  <th>Is comepleted</th>
                </tr>
              </thead>
              <tbody>
                {getdocument.Documents.filter(val=>{
                       if(searchterm==""){
                         return val;
                       }
                       else if(val.doc_name.toLowerCase().includes(searchterm.toLowerCase())){
                         return val;
                       }
                }).map(doc => {
                  return <div>
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
                        <Completedbutton/>
                      </tr>
                    </td>
                  </div>;
                })}
              </tbody>
            </table>
          </div>}
      </div>
    </div>

  )
}

export default DocumentList