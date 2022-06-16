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
<<<<<<< HEAD
=======
import UserRegPage from "./screens/UserRegPage";
import UserTable from "./components/UserTable";
import UserDetails from "./screens/UserDetails";
import Userprofile from "./screens/Userprofile";
>>>>>>> e81427a400e0436a221d596f9b01187b2ced4840
import TestDashboard from "./screens/TestDashboard";
import OrganizationDashboard from "./screens/OrganizationDashboard";
import BranchesTable from "./screens/BranchesTable";
import BranchRegPage from "./screens/BranchRegPage";
import OrgOwnerCreatePage from "./screens/OrgOwnerCreatePage";
<<<<<<< HEAD
import BranchOwnerRegPage from "./screens/BranchOwnerRegPage";
import UserRegPage from "./screens/UserRegPage";
=======
import DocumentList from './components/DocumentList';
import Mail from './components/Mail';
>>>>>>> e81427a400e0436a221d596f9b01187b2ced4840

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreenPage />} />
          <Route exact path="/login" element={<AdminLoginPage />} />

          
          <Route exact path="/create-organization" element={<OrgCreatePage />} />
          <Route exact path="/create-org-owner" element={<OrgOwnerCreatePage />} />

          <Route path="/org-dashboard" exact element={<OrganizationDashboard />} />
          <Route path="/Branch-reg" exact element={<BranchRegPage />} />
          <Route path="/Branch-owner-reg" exact element={<BranchOwnerRegPage />} />
          <Route path="/Branch-table" exact element={<BranchesTable />} />
          
          <Route path="/test-dashboard" exact element={<TestDashboard />} />
          <Route path="/User-reg" exact element={<UserRegPage />} />

          <Route exact path="/register-admin" element={<AdminRegPage />} />
          <Route path="/documents" exact element={<Document />} />
         {/* { <Route path="/mail" exact element={<Chat />} />} */}
          <Route path="/notification" exact element={<Notification />} />
<<<<<<< HEAD
          
          
=======
          <Route path="/user/details" exact element={<UserDetails/>} />
          <Route path="/user/profile" exact element={<Userprofile/>} />
          <Route path="/test-dashboard" exact element={<TestDashboard />} />
          <Route path="/org-dashboard" exact element={<OrganizationDashboard />} />
          <Route path="/Branch-reg" exact element={<BranchRegPage />} />
          <Route path="/Branch-table" exact element={<BranchesTable />} />
          <Route path="/documents/viewdoc" exact element={<DocumentList />} />
>>>>>>> e81427a400e0436a221d596f9b01187b2ced4840

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
