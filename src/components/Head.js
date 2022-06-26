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
  return (
    <div className="head">
      <h1>Welcome to DocTracker</h1>
      <br />
      <h2 className="headerH1">{date}</h2>
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
