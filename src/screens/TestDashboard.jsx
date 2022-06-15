import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

const TestDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is (Test) Branch Dash Board</h1>
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
        Branch Logout
      </Button>
    </div>
  );
};

export default TestDashboard;
