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
           
            
          </div>}
      </div>
    </div>

  )
}

export default DocumentList