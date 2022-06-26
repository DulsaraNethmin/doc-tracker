import React from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css";
import Tbl from "./Table.js";

// const {Content} = Layout;
const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

function Head() {
  const navigate = useNavigate();

  // import React, { useState } from 'react';

  // import { Anchor, Drawer, Button } from 'antd';
  // import "../../screens/Branch/dashboard.css"
  
  // const { Link } = Anchor;
  
  // function AppHeader() {
  //   const [visible, setVisible] = useState(false);
  
  //   const showDrawer = () => {
  //     setVisible(true);
  //   };
  
  //   const onClose = () => {
  //     setVisible(false);
  //   };
  
  //   return (
  //     <div className="container-fluid">
  //       <div className="header">
          
  //         <div className="mobileHidden">
  //           <Anchor targetOffset="65">
  //             <Link href="/documents" title="Documents" />
  //             <Link href="/user/details" title="User" />
  //             <Link href="/branch/jobs" title=" Jobs" />
  //             <Link href="/chat" title="Notifications" />
  //             <Link href="/notification" title="Chat" />
  //           </Anchor>
  //         </div>
  //         <div className="mobileVisible">
  //           <Button type="primary" onClick={showDrawer}>
  //             <i className="fas fa-bars"></i>
  //           </Button>
  //           {/* <Drawer
  //             placement="right"
  //             closable={false}
  //             onClose={onClose}
  //             visible={visible}
  //           >
  //             <Anchor targetOffset="65">
  //               <Link href="#hero" title="Home" />
  //               <Link href="#about" title="About" />
  //               <Link href="#feature" title="Features" />
  //               <Link href="#works" title="How it works" />
  //               <Link href="#faq" title="FAQ" />
  //               <Link href="#pricing" title="Pricing" />
  //               <Link href="#contact" title="Contact" />
  //             </Anchor>
  //           </Drawer>
  //            */}
  //         </div>
  //       </div>
  return (
    <div className="head">
      <h1>Welcome to DocTracker</h1>
      <br />
      <h2 className="headerH1">{date}</h2>
      
    </div>
  );
}

export default Head;
