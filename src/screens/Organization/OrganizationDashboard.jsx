import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={(e) => {
          navigate("/branch/create");
        }}
        type="primary"
      >
        Create Branch
      </Button>

      <Button 
      onClick={(e) => {
        navigate("/branch/table");
      }}
      type="primary">Branches</Button>
    
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
