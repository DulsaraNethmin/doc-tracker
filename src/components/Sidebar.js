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
  getItem('Document', '2', <FileTextOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('History', '3'),
    getItem('Jobs', '4'),
    getItem('Profile', '5'),
  ]),
  getItem('Job', 'sub2', <CarryOutOutlined />, [getItem('In Progress', '6'), getItem('Completed', '8'), getItem('New Requests', '8'), getItem('Tracking', '8')]),
  getItem('Payments', '9', <CreditCardOutlined />),
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
          {/* <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          /> */}

          {/* <Header>
            <div className="logo" />
            <Menu
              theme="Dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(5).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
          </Header> */}

          {/* <Content
            style={{
              margin: '0 16px',
            }}

          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(15).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content> */}
          {/* <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default () => <Sidebar />;