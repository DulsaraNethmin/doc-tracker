import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect ,useState} from 'react'
import { fetchDocuments } from '../features/doucument';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Input,Button,Table} from 'antd'
// import Completedbutton from './Completedbutton';
import {SearchOutlined} from '@ant-design/icons'

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
             return record.doc_name.toLowerCase().includes(value.toLowerCase())
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
          title:"Branch_id",
          dataIndex:"branch_id"
        },
        // {
        //   title:"issubmit",
        //   dataIndex:<Completedbutton/>
        // }

  ]
  
  const [searchterm, setsearchterm] = useState("");
  return (
    <div>
      <div>
        <input type="text" placeholder='search' onChange={event=>{setsearchterm(event.target.value)}}/>  
        <Link to='/documents'>
          <Button>adddocument</Button>
        </Link>
        {getdocument.status === "pending" && <div>ERROR</div>}
        {(getdocument.status === "Success" || adddocument.documentAdd === "Succses") &&
          <div>
          <Table dataSource={getdocument.Documents} columns={columns}></Table>
          </div>}
      </div>
    </div>

  )
}

export default DocumentList