import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
//import Chat from "./components/Chat";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Document from "./components/Document";
import Notification from "./components/Notification";
import AdminLoginPage from "./screens/AdminLoginPage";
import AdminRegPage from "./screens/AdminRegPage";
import OrgCreatePage from "./screens/OrgCreatePage";
import SplashScreenPage from "./screens/SplashScreenPage";
import UserRegPage from "./screens/UserRegPage";
import UserTable from "./components/UserTable";
import UserDetails from "./screens/UserDetails";
import Userprofile from "./screens/Userprofile";
import TestDashboard from "./screens/TestDashboard";
import OrganizationDashboard from "./screens/OrganizationDashboard";
import BranchesTable from "./screens/BranchesTable";
import BranchRegPage from "./screens/BranchRegPage";
import OrgOwnerCreatePage from "./screens/OrgOwnerCreatePage";
import BranchOwnerRegPage from "./screens/BranchOwnerRegPage";


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreenPage />} />
          <Route path="/login" element={<AdminLoginPage />} />

          <Route exact path="/organization/create" element={<OrgCreatePage />} />
          <Route exact path="/organization/owner/create" element={<OrgOwnerCreatePage />} />
          <Route path="/organization/dashboard" exact element={<OrganizationDashboard />} />
          <Route path="/branch/create" exact element={<BranchRegPage />} />
          <Route path="/branch/owner/create" exact element={<BranchOwnerRegPage />} />
          <Route path="/branch/table" exact element={<BranchesTable />} />
          
          <Route path="/test/dashboard" exact element={<TestDashboard />} />
          <Route path="/user/reg" exact element={<UserRegPage />} />
          <Route path="/user/details" exact element={<UserDetails/>} />
          <Route path="/user/profile" exact element={<Userprofile/>} />
          <Route path="/documents" exact element={<Document />} />        
         {/* { <Route path="/mail" exact element={<Chat />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
