import React from "react";
import Header from "../components/Dashboard/Header";
import Feactures from "../components/Dashboard/Features";
import Tbl from "../components/Dashboard/Table";
import Widget from "../components/Dashboard/Widget";
import Sidebar from "../components/Sidebar";
import "../components/Dashboard.css"
import { Col, Divider, Row } from 'antd';

function Dashboard(){
  return(
    <div className="main">
     
      <Row>  <Col flex={0.5}>  <Sidebar/></Col><Col flex={10}><Header/></Col>
     </Row>
     
      <Feactures/>
      <div className="WidgetTable">
      {/* <Divider orientation="left"></Divider> */}
    <Row>
      {/* <Col flex={2}> <Widget/></Col>
      <Col flex={3}> <Tbl/></Col> */}

      <h1>Hello</h1>
    </Row>
      </div> 
    
    </div>
  );
}

export default Dashboard;