import React,{ useState }  from "react";
import Tbl from "../../components/Dashboard/Table";
import Widget from "../../components/Dashboard/Widget";
import "../../components/Dashboard.css";
import Head from "../../components/Dashboard/Head";
import {
  FileTextOutlined,
  UserOutlined,
  AppstoreOutlined,
  BellOutlined,
  WechatOutlined
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
    getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [ getItem(<a class="nav-link" href="/branch/jobs/int/pending">Pending Jobs</a>, '8'),getItem('Completed', '9')]),
    getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem('New Requests', '10'), getItem('In progress', '11'),getItem('Completed', '12')]),
  ]),

  getItem( <a class="nav-link" href="">Notifications</a>, '3',<BellOutlined />),
  getItem( <a class="nav-link" href="#">Chat</a>, '4',<WechatOutlined />),
];

function Dashboard(){
  const [collapsed, setCollapsed] = useState(true);
  return(
      <div>
       
       <Layout style={{ minHeight: '100vh' }}>
       
        <Sider className="Sidebar" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {/* <div className="logo" /> */}
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  items={items} />
      </Sider> 
      
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
      </Layout>
      
    </Layout>
      </div>
  );
}

export default Dashboard;



