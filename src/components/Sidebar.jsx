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
    getItem(<a class="nav-link" href="">Internal Jobs</a>, 'sub3', null, [getItem(<a class="nav-link" href="/Jobs/IntNewJobRequests">New Requests</a>,'7'), getItem(<a class="nav-link" href="/Jobs/IntJobsInProgress">In progress</a>, '8'),getItem(<a class="nav-link" href="/Jobs/IntCompletedJobs">Completed</a>, '9')]),
    getItem(<a class="nav-link" href="">External Jobs</a>, 'sub4', null, [getItem(<a class="nav-link" href="/Jobs/ExtNewJobRequests">New Requests</a>, '10'), getItem(<a class="nav-link" href="/Jobs/ExtJobsInProgress">In progress</a>, '11'),getItem(<a class="nav-link" href="/Jobs/ExtCompletedJobs">Completed</a>, '12')]),
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