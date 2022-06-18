import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileTextOutlined,
  PieChartOutlined,
  CreditCardOutlined,
  CarryOutOutlined,
  UserOutlined,
  AppstoreOutlined
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
 
  getItem('Document','1',  <FileTextOutlined />),

  getItem('User', '2', <UserOutlined />),


  getItem('Jobs', 'sub2', <AppstoreOutlined />, [
    getItem('Internal Jobs', 'sub3', null, [getItem('New Requests', '7'), getItem('In progress', '8'),getItem('Completed', '8')]),
    getItem('External Jobs', 'sub4', null, [getItem('New Requests', '7'), getItem('In progress', '8'),getItem('Completed', '8')]),
  ]),


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
          position: 'fixed',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
          {/* <div className="logo" /> */}
          <Menu className="Sidebar" theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
         
        </Layout>
      </Layout>
    );
  }
}

export default () => <Sidebar />;