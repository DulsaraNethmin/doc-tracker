import React from "react";
import { Layout } from "antd";
import "./pages.css";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const background = new URL("../../images/background.png", import.meta.url);
const logo = new URL("../../images/logo.jpeg", import.meta.url);

const SplashScreenPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <PageHeader
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        //ghost={false}
        //onBack={() => window.history.back()}
        title="DocTracker"
        //subTitle="Organization Mode"
        extra={[
          // <Button key="3">Operation</Button>,
          <Button
            type="text"
            onClick={(e) => {
              navigate("organization/create");
            }}
          >
            Create Organization
          </Button>,
          <Button
            key="1"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </Button>,
        ]}
      ></PageHeader>
      <div>
        <h1>DOC-TRACKER</h1>
        <br />
        <img src={logo} className="image-container" />
        <br />
        <br />
        <br />
        <h2>Welcome to Doc-Tracker</h2>
        <br />
        <p>
          Document delivery and tracking software is the best solution for the
          real-time tracking of documents while in the delivery process. So, DocTracker
          provides information on the documents sent and delivered and allows
          users to get an update about their documents. So get a glace ...​
        </p>
      </div>
      {/* <div>
        <br />
        <Button
          type="primary"
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Login
        </Button>

        <Button
          type="text"
          onClick={(e) => {
            navigate("organization/create");
          }}
        >
          Create Organization
        </Button>
      </div> */}
    </div>
  );
};

export default SplashScreenPage;
