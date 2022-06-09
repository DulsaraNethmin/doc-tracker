import { useEffect } from "react";
import {Widget,addResponseMessage} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

import React from 'react'

function Chat() {
    useEffect(()=>{
       addResponseMessage('Document Tracker Chat');
       //send to backend
       

    },[]);
    const handleNewUserMessage=(newMessage)=>{
        console.log("New masage");
    };
  return (
    <div>
        <Widget handleNewUserMessage={handleNewUserMessage}/> 
    </div>
  )
}

export default Chat