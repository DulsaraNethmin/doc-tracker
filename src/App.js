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
import ViewQrCodeDetails from "./components/ViewQrCodeDetails";
import Mail from "./components/Mail";
import ReceivedMail from "./components/ReceivedMail";
import SendMail from "./components/SendMail";
import GetsentMail from "./components/GetsentMail";
import ConfirmDocDelete from "./components/ConfirmDocDelete";
import EmailScreen from "./screens/Auth/EmailScreen";
import CustomerRegistration from "./screens/Branch/CustomerRegistration";
import DelivererRegistration from "./screens/Branch/DelivererRegistration";
import BranchEdit from "./screens/Organization/BranchEdit";
import SingleBranchTable from "./screens/Organization/SingleBranchTable";
import OrganizationEdit from "./screens/Organization/OrganizationEdit";
import Payments from "./screens/Branch/Payments";

import JobsInterPending from "./screens/Branch/JobsInterPending";
import JobsInterCreated from "./screens/Branch/JobsInterCreated";
// import JobsIntPendTable from "./screens/Branch/JobsInterCreated";
import JobsInterComp from "./screens/Branch/JobsInterComp";
import ShowJobsInterCreated from "./screens/Branch/ShowJobsInterCreated";

import JobsExtReq from "./screens/Branch/JobsExtReq";
import JobsExtPending from "./screens/Branch/JobsExtPending";
import JobsExtComp from "./screens/Branch/JobsExtPending";

import Jobs from "./screens/Branch/Jobs"
import UserProfile from "./screens/Branch/Userprofile";

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
          <Route path="/user/profile/:user_id" exact element={<UserData/>} />
          <Route path="/documents" exact element={<Document/>} />    
         
          <Route path="/branch/jobs/int/new" exact element={<JobsInterCreated/>} /> 
          <Route path="/branch/jobs/int/new/show" exact element={<ShowJobsInterCreated/>} /> 
          <Route path="/branch/jobs/int/pending" exact element={<JobsInterPending/>} />
          <Route path="/branch/jobs/int/comp" exact element={<JobsInterComp/>} />  
          <Route path="/branch/jobs" exact element={<Jobs/>} />

          <Route path="/branch/jobs/ext/req" exact element={<JobsExtReq/>} /> 
          <Route path="/branch/jobs/ext/pending" exact element={<JobsExtPending/>} /> 
          <Route path="/branch/jobs/ext/comp" exact element={<JobsExtComp/>} /> 
          
         {/* { <Route path="/mail" exact element={<Chat />} />} */}
          <Route path="/user/profile/:user_id" exact element={<UserProfile/>} />
          <Route path="/documents" exact element={<Document/>} /> 
          <Route path="/documents/viewQrcode" exact element={<ViewQrCodeDetails/>} />   
          <Route path="/documents/confirmDelete" exact element={<ConfirmDocDelete/>} />   
          <Route path="/mail" exact element={<Mail/>} />
          <Route path="/Mail/Received" exact element={<ReceivedMail/>} />
          <Route path="/Mail/Send" exact element={<SendMail/>} />
          <Route path="/Mail/GetsentMail" exact element={<GetsentMail/>} />

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
