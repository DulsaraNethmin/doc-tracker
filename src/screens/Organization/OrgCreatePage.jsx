import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Card } from "antd";
import OrgCreate from '../../components/OrgCreate';

const logo = new URL("../../images/logo.png", import.meta.url);

const OrgCreatePage = () => {
  return (
    <div className="main-container">
      <h1>DOC-TRACKER</h1>
      <img src={logo} className="image-container" />
      <OrgCreate />
    </div>
  )
}

export default OrgCreatePage