import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { fetchDocuments } from '../features/doucument';


function DocumentList() {
    const dispatch = useDispatch();

    const getdocument=useSelector(state=>state.documents);
    const adddocument=useSelector(state=>state.documents);
    useEffect(() => {
        dispatch(fetchDocuments())
    }, [dispatch]);
  
  return (
    <div>
         <div>
          {getdocument.status==="pending"&&<div>ERROR</div>}
          {(getdocument.status==="Success" || adddocument.documentAdd==="Succses")&&
          <div>
              {console.log(getdocument.DocumentList)}
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

export default DocumentList