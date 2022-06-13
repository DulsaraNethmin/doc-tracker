import React from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button 
      onClick={(e) => {
        navigate("/Branch-reg");
      }}
      type="primary">Create Branch</Button>
      <br />
      <Button type="primary">Branches</Button>
    </div>
  )
}

export default OrganizationDashboard
