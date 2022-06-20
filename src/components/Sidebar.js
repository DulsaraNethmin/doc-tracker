// import React,{ useState }  from "react";
// // import Header from "../components/Sidebar/Header";
// // import Feactures from "../components/Sidebar/Features";
// // import Tbl from "../components/Sidebar/Table";
// // import Widget from "../components/Sidebar/Widget";
// // import Sidebar from "../components/Sidebar";
// import "./Dashboard.css";
// // import Head from "../components/Sidebar/Head";
// // import { Col, Divider, Row } from 'antd';
// // import { Layout } from 'antd';
// // const { Header, Footer, Sider, Content } = Layout;
// import {
//   FileTextOutlined,
//   PieChartOutlined,
//   CreditCardOutlined,
//   CarryOutOutlined,
//   UserOutlined,
//   AppstoreOutlined,
//   BellOutlined,
//   WechatOutlined
// } from '@ant-design/icons';
// import { Layout,Menu } from 'antd';
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

//   getItem(<a class="nav-link" href="">User</a>, '2', <UserOutlined />),

//   getItem('Jobs', 'sub2', <AppstoreOutlined />, [
//     getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [getItem('New Requests', '7'), getItem('In progress', '8'),getItem('Completed', '9')]),
//     getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem('New Requests', '10'), getItem('In progress', '11'),getItem('Completed', '12')]),
//   ]),

//   getItem( <a class="nav-link" href="/notification">Notifications</a>, '3',<BellOutlined />),
//   getItem( <a class="nav-link" href="/chat">Chat</a>, '4',<WechatOutlined />),
// ];

// function Sidebar(){
//   const [collapsed, setCollapsed] = useState(true);
//   return(
//       <div>
       
//        <Layout >

//         <Sider className="Sidebar" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         {/* <div className="logo" /> */}
//         <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  items={items} />
//       </Sider>
//       <Layout className="site-layout">


//       </Layout>
      
//     </Layout>
//       </div>
//   );
// }

// export default Sidebar;





import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileTextOutlined,
  PieChartOutlined,
  CreditCardOutlined,
  CarryOutOutlined,
  UserOutlined,
  BellOutlined,
  AppstoreOutlined,
  WechatOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
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

  getItem(<a class="nav-link" href="">User</a>, '2', <UserOutlined />),

  getItem('Jobs', 'sub2', <AppstoreOutlined />, [
    getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [getItem('New Requests', '7'), getItem('In progress', '8'),getItem('Completed', '9')]),
    getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem('New Requests', '10'), getItem('In progress', '11'),getItem('Completed', '12')]),
  ]),

  getItem( <a class="nav-link" href="/notification">Notifications</a>, '3',<BellOutlined />),
  getItem( <a class="nav-link" href="/chat">Chat</a>, '4',<WechatOutlined />),
];

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
        
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu className="Sidebar" theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          
        </Layout>
      </Layout>
    );
  }
}

export default () => <Sidebar />;