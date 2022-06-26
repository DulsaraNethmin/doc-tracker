// import React,{ useState }  from "react";
// import Tbl from "../../components/Dashboard/Table";
// import Widget from "../../components/Dashboard/Widget";
// import "../../components/Dashboard.css";
// import Head from "../../components/Dashboard/Head";
// import AppHeader from "../Branch/header";
// import {
//   FileTextOutlined,
//   UserOutlined,
//   AppstoreOutlined,
//   BellOutlined,
//   WechatOutlined
// } from '@ant-design/icons';
// import { Layout,Menu } from 'antd';
// import AppHero from "../Branch/hero";
// const { Header, Footer, Sider, Content } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
 
//   getItem(<a class="nav-link" href="/documents">Documents</a>,'0',<FileTextOutlined />),

//   getItem(<a class="nav-link" href="/user/details">User</a>, '2', <UserOutlined />),

//   getItem('Jobs', 'sub2', <AppstoreOutlined />, [
//     getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [getItem(<a class="nav-link" href="/branch/jobs/int/new">Created</a>, '6'),getItem(<a class="nav-link" href="/branch/jobs/int/pending">Pending Jobs</a>, '7'),getItem(<a class="nav-link" href="/branch/jobs/int/comp">Completed Jobs</a>, '8')]),
//     getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem(<a class="nav-link" href="/branch/jobs/ext/req">Requests</a>, '9'),getItem(<a class="nav-link" href="/branch/jobs/ext/pending">Pending Jobs</a>, '10'),getItem(<a class="nav-link" href="/branch/jobs/ext/comp">Completed Jobs</a>, '11')]),
//   ]),

//   getItem( <a class="nav-link" href="">Notifications</a>, '3',<BellOutlined />),
//   getItem( <a class="nav-link" href="#">Chat</a>, '4',<WechatOutlined />),
// ];

// function Dashboard(){
//   const [collapsed, setCollapsed] = useState(true);
//   return(
//       <div>
       
//        <Layout style={{ minHeight: '100vh' }}>
       
//        <Sider className="Sidebar" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//        {/* <div className="logo" /> */}
//        <Menu defaultSelectedKeys={['1']} mode="inline"  items={items} />
//        </Sider> 
       
//        <Layout  className="site-layout">
//         {/* <header className="site-layout-background"
//          style={{
//            padding: 0,
//          }}><Head /></header>
//         */}
//       <AppHeader/>
//       {/* <AppHero/> */}
        
//        <Content style={{ margin: '0 16px' }}>
        
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          
//         <div className="homeWidgets">
//          <Widget/>
//         <Tbl/>
//        </div>
//         </div>
//        </Content>
//        </Layout>
       
//        </Layout>
       
//       </div>
//   );
// }

// export default Dashboard;


// // <Layout className='mainLayout'>
// //     <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
// //     <AppHeader/>
// //     </Header>
// //     <Content>
// //       <AppHome></AppHome>
// //     </Content>
// //    <Footer>
// //    <AppFooter/>
// //    </Footer>
// //   </Layout>


import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';

import AppHeader from '../../components/Dashboard/Head'
import AppDashboard from '../../components/Dashboard/Dashboard_items'
// import AppHeader from './components/common/header';
import AppFooter from '../../components/Dashboard/Footer';
// import OrganizationDashboard from '../Organization/OrganizationDashboard'
// import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (

 <Layout className="mainLayout">
      <Header>
        <AppHeader/>

        
      </Header>
      <AppDashboard/>
      {/* <Content>
      
        
        
      </Content> */}
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;