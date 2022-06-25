
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import QRCode from 'qrcode';
import { useState } from 'react';

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
    QRCode.toDataURL(id).then((data)=>{
         setSrc(data);
    });
 },[])
 
    const Doc_det = async() => {

    var response = await axios.get(`http://localhost:8080/document/verify?doc_id=${id}`);
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
            
         }}
         >
         <h1>Document name is {doc_name} </h1>  
         <h3>Type is {type}</h3>
         <h3>QR Code is</h3>
         </div>
         <p style={{
            width:'300px',
            position: 'relative',
  left: '300px'
         }}><img src={src} width="300px" 
     height="300px" /></p>
    </div>
  )
}

export default ViewQrCodeDetails