import React from "react";
import { useNavigate } from "react-router-dom";
// import "../Dashboard.css";
// import Tbl from "./Table.js";

// const {Content} = Layout;


function Head() {
  const navigate = useNavigate();
  return (
    <div className="head">
      
      <button
        onClick={async (e) => {
          e.preventDefault();
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          navigate("/branch/deliverer/create");
        }}
      >
        Create Deliverer
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          navigate("/branch/customer/create");
        }}
      >
        Create Customer
      </button>
    </div>
  );
}

export default Head;
