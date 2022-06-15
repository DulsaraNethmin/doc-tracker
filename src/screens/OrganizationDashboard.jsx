import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={(e) => {
          navigate("/Branch-reg");
        }}
        type="primary"
      >
        Create Branch
      </Button>
      <br />
      <Button type="primary">Branches</Button>
      <br />
      <br />
      <br />
      <br />
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={async (e) => {
          e.preventDefault();
          localStorage.clear();
          navigate("/");
        }}
      >
        Organization Logout
      </Button>
    </div>
  );
};

export default OrganizationDashboard;
