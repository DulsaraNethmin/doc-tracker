import React,{ useState }  from "react";
import Tbl from "../../components/Dashboard/Table";
import Widget from "../../components/Dashboard/Widget";
import "./dashboard.css";
import Head from "../../components/Dashboard/Head";
import { useNavigate } from "react-router-dom";
import JobsInternalPending from "./internalpending"
import {

  Button,
  Dropdown,
 
  PageHeader,
  Row,
  Col,
  Card,
  Form,
  Input,
  Tag,
  Typography,

} from "antd";
import {
  FileTextOutlined,
  UserOutlined,
  AppstoreOutlined,
  BellOutlined,
  WechatOutlined,
  CreditCardOutlined
} from '@ant-design/icons';
import { Layout,Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
 
  getItem(<a class="nav-link" href="/documents">Documents</a>,'0',<FileTextOutlined />),

  getItem(<a class="nav-link" href="/user/details">User</a>, '2', <UserOutlined />),

  getItem('Jobs', 'sub2', <AppstoreOutlined />, [
    getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [getItem(<a class="nav-link" href="/branch/jobs/int/new">New Jobs</a>, '7'), getItem(<a class="nav-link" href="/branch/jobs/int/pending">Pending Jobs</a>, '8'),getItem(<a class="nav-link" href="/branch/jobs/int/comp">Completed Jobs</a>, '9')]),
    getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem(<a class="nav-link" href="/branch/jobs/ext/req">New Jobs</a>, '7'), getItem(<a class="nav-link" href="/branch/jobs/ext/pending">Pending Jobs</a>, '8'),getItem(<a class="nav-link" href="/branch/jobs/ext/comp">Completed Jobs</a>, '9')]),
  ]),

  getItem( <a class="nav-link" href="">Notifications</a>, '3',<BellOutlined />),
  getItem( <a class="nav-link" href="/mail">Mail</a>, '4',<WechatOutlined />),

  getItem( <a class="nav-link" href="/branch/payments">Payments</a>, '5',<CreditCardOutlined />),
];

function Dashboard(){
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  return(
      <div>
        <PageHeader
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        //ghost={false}
        //onBack={() => window.history.back()}
        title="DocTracker"
        subTitle="Branch Mode"
        extra={[
          <Button
            key="3"
            onClick={async (e) => {
              e.preventDefault();
              navigate("/branch/customer/create");
            }}


          >
            Create New Customer
          </Button>,
          <Button
            key="2"
            onClick={async (e) => {
              e.preventDefault();
              navigate("/branch/deliverer/create");
            }}

          >
            Create New Deliverer
          </Button>,
          <Button
            key="1"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={async (e) => {
              e.preventDefault();
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>,
        ]}
      ></PageHeader>
       <Layout style={{ minHeight: '100vh' }}>
       
        <Sider className="Sidebar" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {/* <div className="logo" /> */}
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  items={items} />
      </Sider> 
      
           
<div>
<Layout  className="site-layout"><header className="site-layout-background"
          style={{
            padding: 0,
          }}><Head /></header>
     
       <Content style={{ margin: '0 16px' }}>
         
         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           
         <div className="homeWidgets">
          <Widget/>
         <Tbl/>
        </div>
         </div>
       </Content>
     
        {/* <Tbl/>
        <Widget/> */}

{/*       
      <Content className="content">

         </Content> */}

<Row style={{ padding: "4% 0" }}>
          <Col span={6}></Col>
          <Col span={12}><JobsInternalPending/></Col>
          <Col span={6}></Col></Row>

      </Layout>
</div>
      
      
    </Layout>
      </div>
  );
}

export default Dashboard;




// import 'antd/dist/antd.css';
// import React, { useState } from "react";
// import AppHeader from '../../components/Dashboard/Head'
// import AppDashboard from '../../components/Dashboard/Dashboard_items'
// // import AppHeader from './components/common/header';
// import AppFooter from '../../components/Dashboard/Footer';
// // import OrganizationDashboard from '../Organization/OrganizationDashboard'
// // import AppHome from './views/home';
// import Head from "../Organization/OrganizationDashboard"

// import { useNavigate } from "react-router-dom";

// import {

//   Button,
//   Dropdown,
 
//   PageHeader,
//   Row,
//   Col,
//   Card,
//   Form,
//   Input,
//   Tag,
//   Typography,

// } from "antd";
// import Sidebar from "../../components/Sidebar"
// import {
//   FileTextOutlined,
//   UserOutlined,
//   AppstoreOutlined,
//   BellOutlined,
  
// } from "@ant-design/icons";
// import { Layout, Menu } from "antd";




// const { Header, Content, Footer,Sider, WechatOutlined} = Layout;


// const current = new Date();

// function getItem(label, key, icon, children) {
 
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem(
//     <a class="nav-link" href="/documents">
//       Documents
//     </a>,
//     "0",
//     <FileTextOutlined />
//   ),

//   getItem(
//     <a class="nav-link" href="/user/details">
//       User
//     </a>,
//     "2",
//     <UserOutlined />
//   ),

//   getItem("Jobs", "sub2", <AppstoreOutlined />, [
//     getItem(
//       <a class="nav-link" href="">
//         Internal Jobs
//       </a>,
//       "sub3",
//       null,
//       [
//         getItem("New Requests", "7"),
//         getItem("In progress", "8"),
//         getItem("Completed", "9"),
//       ]
//     ),
//     getItem(
//       <a class="nav-link" href="">
//         External Jobs
//       </a>,
//       "sub4",
//       null,
//       [
//         getItem("New Requests", "10"),
//         getItem("In progress", "11"),
//         getItem("Completed", "12"),
//       ]
//     ),
//   ]),

//   getItem(
//     <a class="nav-link" href="">
//       Notifications
//     </a>,
//     "3",
//     <BellOutlined />
//   ),
//   getItem(
//     <a class="nav-link" href="#">
//       Chat
//     </a>,
//     "4",
//     <WechatOutlined />
//   ),
// ];

// const date = `${current.getDate()}/${current.getMonth() + 1
//   }/${current.getFullYear()}`;


// function App() {
//   const navigate = useNavigate();
//   const [collapsed, setCollapsed] = useState(true);
//   return (
//     <div>
//       <Layout style={{ minHeight: "100vh" }}>

//       <Sider
//         className="Sidebar"
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         {/* <div className="logo" /> */}
//         <Menu
//           theme="light"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//       <PageHeader
//         avatar={{
//           src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
//         }}
//         //ghost={false}
//         //onBack={() => window.history.back()}
//         title="DocTracker"
//         subTitle="Branch Mode"
//         extra={[
//           <Button
//             key="3"
//             onClick={async (e) => {
//               e.preventDefault();
//               navigate("/branch/customer/create");
//             }}


//           >
//             Create New Customer
//           </Button>,
//           <Button
//             key="2"
//             onClick={async (e) => {
//               e.preventDefault();
//               navigate("/branch/deliverer/create");
//             }}

//           >
//             Create New Deliverer
//           </Button>,
//           <Button
//             key="1"
//             type="primary"
//             htmlType="submit"
//             className="login-form-button"
//             onClick={async (e) => {
//               e.preventDefault();
//               localStorage.clear();
//               navigate("/");
//             }}
//           >
//             Logout
//           </Button>,
//         ]}
//       ></PageHeader>


//       <Layout className="site-layout">
//         <header
//           className="site-layout-background"
//         // style={{
//         //   padding: 0,
//         // }}
//         >
//           <div className="head">
//             <h1>Welcome DocTracker</h1>
//             <br />
//             <h2 className="headerH1">{date}</h2>
//           </div>
//         </header>
//       </Layout>
//       </Layout>
//     </div>

//   );
// }

// export default App;














// // <Layout style={{ minHeight: "100vh" }}>
// //         <Sider
// //           className="Sidebar"
// //           collapsible
// //           collapsed={collapsed}
// //           onCollapse={(value) => setCollapsed(value)}
// //         >
// //           {/* <div className="logo" /> */}
// //           <Menu
// //             theme="light"
// //             defaultSelectedKeys={["1"]}
// //             mode="inline"
// //             items={items}
// //           />
// //         </Sider>

// //         <Layout className="site-layout">
// //           <header
// //             className="site-layout-background"
// //             style={{
// //               padding: 0,
// //             }}
// //           >
// //             <Head />
// //           </header>

// //           <Content style={{ margin: "0 16px" }}>
// //             <div
// //               className="site-layout-background"
// //               style={{ padding: 24, minHeight: 360 }}
// //             >
// //               <div className="homeWidgets">
// //                 <Widget />
// //                 <Tbl />
// //               </div>
// //             </div>
// //           </Content>

// //           {/* <Tbl/>
// //         <Widget/> */}

// //           {/*
// //       <Content className="content">

// //          </Content> */}
// //         </Layout>
// //       </Layout>





