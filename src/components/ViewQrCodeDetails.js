
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import QRCode from 'qrcode';
import { useState } from 'react';

function ViewQrCodeDetails() {
    const [src,setSrc]=useState('');
    const doc_id=localStorage.getItem('doc_id');
    const id={doc_id}.doc_id;
 useEffect(() => {
   UserProfile()
   
 }, [])
 useEffect(()=>{
    
 },[])
 
    const UserProfile = async() => {

    var response = await axios.get(`http://localhost:8080/document/verify?doc_id=${id}`);
    console.log(response.data);
    return response.data;
        };
        
    
  return (
  
    <div >

         <p>Document id is {id}</p>  
         <h3>QR Code is</h3>
         <img src={src} />
    </div>
  )
}

export default ViewQrCodeDetails