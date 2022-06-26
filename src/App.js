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
import Userprofile from "./screens/Branch/Userprofile";

import OrganizationDashboard from "./screens/Organization/OrganizationDashboard";
import BranchesTable from "./screens/Organization/BranchesTable";
import BranchRegPage from "./screens/Auth/BranchRegPage";
import OrgOwnerCreatePage from "./screens/Organization/OrgOwnerCreatePage";
import BranchOwnerRegPage from "./screens/Auth/BranchOwnerRegPage";
import Dashboard from "./screens/Branch/Dashboard";
import EmailScreen from "./screens/Auth/EmailScreen";
import CustomerRegistration from "./screens/Branch/CustomerRegistration";
import DelivererRegistration from "./screens/Branch/DelivererRegistration";
import BranchEdit from "./screens/Organization/BranchEdit";
import SingleBranchTable from "./screens/Organization/SingleBranchTable";
import OrganizationEdit from "./screens/Organization/OrganizationEdit";
import Payments from "./screens/Branch/Payments";


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
          <Route path="/organization/edit" exact element={<OrganizationEdit/>} />
          <Route path="/branch/create" exact element={<BranchRegPage/>} />
          <Route path="/branch/owner/create" exact element={<BranchOwnerRegPage/>} />
          <Route path="/branch/table" exact element={<BranchesTable/>} />
          <Route path="/branch/edit" exact element={<BranchEdit/>} />
          <Route path="/branch/table/one" exact element={<SingleBranchTable />} />
          <Route path="/branch/payments" exact element={<Payments />} />
          
          <Route path="/branch/dashboard" exact element={<Dashboard/>} />
          <Route path="/branch/customer/create" exact element={<CustomerRegistration />} />
          <Route path="/branch/deliverer/create" exact element={<DelivererRegistration />} />
          <Route path="/user/details" exact element={<UserDetails/>} />
          <Route path="/user/profile/:user_id" exact element={<Userprofile/>} />
          <Route path="/documents" exact element={<Document/>} />        
         {/* { <Route path="/mail" exact element={<Chat />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
