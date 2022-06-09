import React from "react";
import Header from "../components/Dashboard/Header";
import Feactures from "../components/Dashboard/Features";
import Tbl from "../components/Dashboard/Table";

function Dashboard(){
  return(
    <div className="main">
      <Header/>
      <Feactures/>
      <Tbl/>
    </div>
  );
}

export default Dashboard;