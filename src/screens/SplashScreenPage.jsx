import React from "react";
import { Layout } from "antd";
import "./pages.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;
const background = new URL("../images/background.png", import.meta.url);
const logo = new URL("../images/logo.png", import.meta.url);

const SplashScreenPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div>
        <h1>DOC-TRACKER</h1>

        <img src={logo} className="image-container" />

        <h2>Welcome to Doc-Tracker</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
          distinctio ut doloribus, tenetur dignissimos amet ipsa tempora rerum
          fuga ab nobis. Cum consequatur, quaerat iste ullam fuga possimus
          delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolorum ullam architecto ipsa vel autem illo commodi ut odit at
          deleniti nemo eos mollitia quos tempora, molestias veniam nesciunt,
          eveniet porro.
        </p>
      </div>
      <div>
        <br />
        <Button type="primary" onClick={(e)=>{navigate('login')}}>Login</Button>

        <Button type="text" onClick={(e)=>{navigate('create-organization')}}>Create Organization</Button>
      </div>
    </div>
  );
};

export default SplashScreenPage;