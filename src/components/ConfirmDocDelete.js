
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import QRCode from 'qrcode';
import { useState } from 'react';
import Background from '../images/R.jpg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
function ViewQrCodeDetails() {
    const [doc,setDoc]=useState([]);
    const [doc_name,setDoc_name]=useState('');
    const [current_user_name,setcurrent_user_name]=useState('');
    const [type,settype]=useState('');
    const [src,setSrc]=useState();
    const doc_id=localStorage.getItem('doc_id');
    const id={doc_id}.doc_id;
 useEffect(() => {
   Doc_det()
   
 }, [])
 useEffect(()=>{
    console.log(id);
    QRCode.toDataURL(`/document/verify?doc_id=${id}`).then((data)=>{
         setSrc(data);
    });
 },[])
 
    const Doc_det = async() => {

    var response = await axios.get(`http://localhost:8080/document/verifyweb?doc_id=${id}`);
    console.log(response.data);
    setDoc(response.data);
    response.data.map((e)=>{
         setDoc_name(e.doc_name);
         setcurrent_user_name(e.current_user_name);
         settype(e.type);
      })
    return response.data;
        };
        const DeleteItem = async() => {

            var response = await axios.delete(`http://localhost:8080/document/DeleteOnedoc?uuid=${id}`);
            console.log(response.data);
            setDoc(response.data);
            response.data.map((e)=>{
                 setDoc_name(e.doc_name);
                 setcurrent_user_name(e.current_user_name);
                 settype(e.type);
              })
            return response.data;
                };
        
    
  return (
  
    <div >
         <div style={{
            margin:'10px',
            position:'relative',
            left:'100px',
            border: '1px solid green',
            backgroundImage: `url(${Background})`,
            color:'White',
           'font-family': 'Lucida Handwriting'
            
         }}
         >
         <h1 style={{
            padding:'20px',
            color:'White',
            'font-family': 'Lucida Handwriting'

        }}>Document name is {doc_name} </h1>  
         <h3 style={{
            padding:'20px',
            color:'White',
            'font-family': 'Lucida Handwriting'

        }}>Type is {type}</h3>
        
         </div>
         <div>
            <p>Click me to delete</p>
            <Link to='/documents'>
         <Button onClick={DeleteItem}>Delete</Button>
         </Link>
         </div>
    </div>
  )
}

export default ViewQrCodeDetails