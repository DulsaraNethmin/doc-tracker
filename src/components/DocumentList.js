import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchDocuments } from '../features/doucument';
import { Link } from 'react-router-dom';
import './DocumentListcs.css'

function DocumentList() {
  const dispatch = useDispatch();


  const getdocument = useSelector(state => state.documents);
  const adddocument = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(fetchDocuments())
  }, [dispatch]);

  return (
    <div>
      <div>

        <Link to='/documents'>
          <button>adddocument</button>
        </Link>
        {getdocument.status === "pending" && <div>ERROR</div>}
        {(getdocument.status === "Success" || adddocument.documentAdd === "Succses") &&
          <div>
            <table>
              <thead>
                <tr>
                  <th>Document_Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Department_id</th>
                </tr>
              </thead>
              <tbody>
                {getdocument.Documents.map(doc => <div>
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

                </div>)}
              </tbody>
            </table>
          </div>}
      </div>
    </div>

  )
}

export default DocumentList