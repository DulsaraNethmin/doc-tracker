import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Chat from "./components/Chat";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Document from "./components/Document";

import AdminLoginPage from "./screens/Auth/AdminLoginPage";

import OrgCreatePage from "./screens/Organization/OrgCreatePage";
import SplashScreenPage from "./screens/Auth/SplashScreenPage";
import UserRegPage from "./screens/Branch/UserRegPage";

import UserDetails from "./screens/Branch/UserDetails";
import UserData from "./screens/Branch/Userprofile";

import OrganizationDashboard from "./screens/Organization/OrganizationDashboard";
import BranchesTable from "./screens/Organization/BranchesTable";
import BranchRegPage from "./screens/Auth/BranchRegPage";
import OrgOwnerCreatePage from "./screens/Organization/OrgOwnerCreatePage";
import BranchOwnerRegPage from "./screens/Auth/BranchOwnerRegPage";
import Dashboard from "./screens/Branch/Dashboard";

import JobsInterReq from "./screens/Branch/JobsInterPending";
import JobsIntPendTable from "./screens/Branch/JobsInterCreated";
import JobsInterComp from "./screens/Branch/JobsInterComp";

import JobsExtReq from "./screens/Branch/JobsExtReq";
import JobsExtPending from "./screens/Branch/JobsExtPending";
import JobsExtComp from "./screens/Branch/JobsExtPending";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreenPage />} />
          <Route path="/login" element={<AdminLoginPage />} />

          <Route exact path="/organization/create" element={<OrgCreatePage/>} />
          <Route exact path="/organization/owner/create" element={<OrgOwnerCreatePage/>} />
          <Route path="/organization/dashboard" exact element={<OrganizationDashboard/>} />
          <Route path="/branch/create" exact element={<BranchRegPage/>} />
          <Route path="/branch/owner/create" exact element={<BranchOwnerRegPage/>} />
          <Route path="/branch/table" exact element={<BranchesTable/>} />
          
          <Route path="/branch/dashboard" exact element={<Dashboard/>} />
          <Route path="/user/reg" exact element={<UserRegPage/>} />
          <Route path="/user/details" exact element={<UserDetails/>} />
          <Route path="/user/profile/:user_id" exact element={<UserData/>} />
          <Route path="/documents" exact element={<Document/>} />    

          <Route path="/branch/jobs/int/req" exact element={<JobsInterReq/>} /> 
          <Route path="/branch/jobs/int/pending" exact element={<JobsIntPendTable/>} />
          <Route path="/branch/jobs/int/comp" exact element={<JobsInterComp/>} />  

          <Route path="/branch/jobs/ext/req" exact element={<JobsExtReq/>} /> 
          <Route path="/branch/jobs/ext/pending" exact element={<JobsExtPending/>} /> 
          <Route path="/branch/jobs/ext/comp" exact element={<JobsExtComp/>} /> 
         {/* { <Route path="/mail" exact element={<Chat />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
