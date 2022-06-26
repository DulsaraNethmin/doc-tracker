import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect ,useState} from 'react'
import { fetchDocuments } from '../features/doucument';
import { Link, useHref } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Input,Button,Table} from 'antd'
// import Completedbutton from './Completedbutton';
import {SearchOutlined} from '@ant-design/icons'
import axios from 'axios';


function DocumentList() {
  const dispatch = useDispatch();


  const getdocument = useSelector(state => state.documents);
  const adddocument = useSelector(state => state.documents);
  const [Qrbutton, setQrbutton] = useState(false);
 
  useEffect(() => {
    dispatch(fetchDocuments())
    console.log(getdocument.Documents);
  }, [dispatch]);
  const getUniqId=(e)=>{
    
       setQrbutton(true);

  }
  const columns=[
         {
           title:"doc_name",
           dataIndex:"doc",
           filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
             return(<input autoFocus placeholder='Type a doc_name to search'
             value={selectedKeys[0 ]}
             onChange={(e)=>{
               setSelectedKeys(e.target.value?[e.target.value]:[])
             }}
             onPressEnter={()=>{
               confirm()
             }}
             onBlur={()=>{
               confirm()
             }}
             
             ></input>
           )},
           filterIcon:()=>{
             return<SearchOutlined/>;
           },
           onFilter:(value,record)=>{
             return record.doc.toLowerCase().includes(value.toLowerCase())
           }
         },
         {
          title:"type",
          dataIndex:"doc_type"
        },
        {
          title:"date",
          dataIndex:"date"
        },

        {
          title:"Doc_id",
          dataIndex:"doc_id"

        },
        {
          title:"Qr Code Button",
          render:(record)=>{
            

            return(
              <Link to='/documents/viewQrcode'>
           <Button >Show Qr Code</Button>
           </Link>
          )
          

        
          
        }
        
          
        }
       
       

  ]
  
  const [searchterm, setsearchterm] = useState("");
  return (
    <div>
      <div>
        
        {getdocument.status === "pending" && <div>ERROR</div>}
        {(getdocument.status === "Success" || adddocument.documentAdd === "Succses") &&
          <div>
          <Table  style={{
      opacity:'0.7'

      
   }}dataSource={getdocument.Documents} columns={columns}  onRow={(record, recordIndex) => ({
            onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) 
            localStorage.setItem('doc_id',record.doc_id);
          }
             
          
          })}></Table>
          </div>}
      </div>
    </div>

  )
}

export default DocumentList