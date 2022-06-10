import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Chat from "./components/Chat";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Document from "./components/Document";
import Notification from "./components/Notification";
import AdminLoginPage from "./screens/AdminLoginPage";
import AdminRegPage from "./screens/AdminRegPage";
import OrgCreatePage from "./screens/OrgCreatePage";
import SplashScreenPage from "./screens/SplashScreenPage";
import UserRegPage from "./screens/UserRegPage";
import UserTable from "./components/UserTable";
import UserDetails from "./screens/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreenPage />} />
          <Route exact path="/login" element={<AdminLoginPage />} />
          <Route exact path="/create-organization" element={<OrgCreatePage />} />
          <Route exact path="/register-admin" element={<AdminRegPage />} />
          <Route path="/documents" exact element={<Document />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/notification" exact element={<Notification />} />
          <Route path="/user/details" exact element={<UserDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
