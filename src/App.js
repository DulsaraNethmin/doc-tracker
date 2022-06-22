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
import TestDashboard from "./screens/TestDashboard";
import OrganizationDashboard from "./screens/OrganizationDashboard";
import BranchesTable from "./screens/BranchesTable";
import BranchRegPage from "./screens/BranchRegPage";
import OrgOwnerCreatePage from "./screens/OrgOwnerCreatePage";
import Jobs from "./screens/Jobs/Jobs";
import JobsInProgress from "./screens/Jobs/Ext_JobsInProgress";

import JobsInProgress_Table from "./components/JobsInProgress_Table";
import JobTracking from "./components/JobTracking";
import ExtNewJobRequests from "./screens/Jobs/Ext_NewJobRequests";
import ExtCompletedJobs from "./screens/Jobs/Ext_CompletedJobs";

import IntCompletedJobs from "./screens/Jobs/Int_CompletedJobs";

import IntJobsInProgress from "./components/JobsInProgress_Table";
import Sidebar from "./components/Sidebar";
//IntNewJobRequests
function App() {
  return (
    <div className="App">
      
      {/* <Sidebar/> */}
      <BrowserRouter>
        <Routes>
       

          <Route exact path="/" element={<SplashScreenPage />} />
          <Route exact path="/login" element={<AdminLoginPage />} />

          
          <Route exact path="/create-organization" element={<OrgCreatePage />} />
          <Route exact path="/create-org-owner" element={<OrgOwnerCreatePage />} />

          
          <Route exact path="/register-admin" element={<AdminRegPage />} />
          <Route path="/documents" exact element={<Document />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/notification" exact element={<Notification />} />
          <Route path="/test-dashboard" exact element={<TestDashboard />} />
          <Route path="/org-dashboard" exact element={<OrganizationDashboard />} />
          <Route path="/Branch-reg" exact element={<BranchRegPage />} />
          <Route path="/Branch-table" exact element={<BranchesTable />} />

          <Route exact path="/Jobs" element={<Jobs />} />
          <Route exact path="/Jobs/ExtJobsInProgress" element={<JobsInProgress_Table />} />
          <Route exact path="/JobTracking" element={<JobTracking />} />
          <Route exact path="/Jobs/ExtNewJobRequests" element={<ExtNewJobRequests />} />
          <Route exact path="/Jobs/ExtCompletedJobs" element={<ExtCompletedJobs />} />

          <Route exact path="/Jobs/IntJobsInProgress" element={<IntJobsInProgress />} />
          <Route exact path="/Jobs/IntCompletedJobs" element={<IntCompletedJobs />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
