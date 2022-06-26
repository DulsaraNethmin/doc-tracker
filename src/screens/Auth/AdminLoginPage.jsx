import React from "react";
import { Row, Col } from "antd";
import Login from "../../components/Login";
import "./pages.css";

const logo = new URL("../../images/logo.jpeg", import.meta.url);

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