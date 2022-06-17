import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileTextOutlined,
  PieChartOutlined,
  CreditCardOutlined,
  CarryOutOutlined,
  UserOutlined,
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
  // getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Document',  <FileTextOutlined />),

  getItem('User', '1', <UserOutlined />),

  getItem('Job', 'sub1',  <CarryOutOutlined />,
    // [getItem('Requests', '6'), getItem('In Progress', '8'), getItem('Completed', '8'), getItem('Tracking', '8')],
    
    [getItem('Internal Jobs', '6'[
      getItem('Requests', '6'), getItem('In Progress', '8'), getItem('Completed', '8'), getItem('Tracking', '8')
    ]), 
    
    getItem('External Jobs', '8')],
  ),

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