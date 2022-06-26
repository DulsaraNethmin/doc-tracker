import React from 'react';
import Tbl from "../../components/Dashboard/Table";
import Widget from "../../components/Dashboard/Widget";
import AppHero from '../../components/Dashboard/hero'
import { Layout, Content, Col, Row } from 'antd';

function AppDashboard() {
    return (


        <div>

            <Layout style={{ minHeight: '100vh' }}>


                <Layout className="site-layout">

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <div className="homeWidgets">
                        <AppHero />
                        {/* <hr /><br/><br/> */}
                            <Row gutter={[16, 16]}>
                                <Col span={10}><Widget /></Col>
                                <Col span={5}><Tbl /></Col>
                            </Row>
                                                       
                            
                        </div>
                    </div>
                    {/* </Content> */}
                </Layout>

            </Layout>

        </div>


        // <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        //       <Layout style={{ minHeight: '100vh' }}>
        //    <Layout  className="site-layout">
        //          <div className="homeWidgets">

        //          <AppHero/>
        //           <Widget/>
        //         <Tbl/>
        //         </div>
        //         </Layout>
        //         </Layout>

        //          </div>
    );
}

export default AppDashboard;