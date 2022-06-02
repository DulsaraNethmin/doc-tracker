import React from "react";
import { Row, Col } from "antd";
import AdminRegistration from "../components/AdminRegistration";
import RegistrationForm from "../components/Register";
import RegistrationCommon from "../components/RegistrationCommon";
import RegAdminSpecified from "../components/RegAdminSpecified";
import RegNoSpecified from "../components/RegNoSpecified";

const UserRegPage = () => {
  return (
    <div className="main-container">
      <h1>User Registration</h1>
      <br /><br />
      <Row >
        <Col span={12} style={{ padding: "0% 5%" }}>
          <RegistrationCommon />
        </Col>
        <Col span={12} style={{ padding: "0% 5%" }}>
          <RegNoSpecified />
        </Col>
      </Row>
    </div>
  );
};

export default UserRegPage;