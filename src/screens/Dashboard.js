import React from "react";
import Header from "../components/Dashboard/Header";
import Feactures from "../components/Dashboard/Features";
import Tbl from "../components/Dashboard/Table";
import Widget from "../components/Dashboard/Widget";
import Sidebar from "../components/Sidebar";

function Dashboard(){
  return(
    <div className="main">
      <Sidebar/>
      <Header/>
      <Feactures/>
      <Tbl/>
      <Widget/>
    </div>
  );
}

export default Dashboard;