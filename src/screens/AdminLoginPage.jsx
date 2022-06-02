import React from "react";
import { Row, Col } from "antd";
import Login from "../components/AdminLogin";

const logo = new URL("../images/logo.png", import.meta.url);

const AdminLoginPage = () => {
  return (
    <div className="main-container">
      <h1>DOC-TRACKER</h1>
      <img src={logo} className="image-container" />
      <Login />
    </div>
  );
};

export default AdminLoginPage;