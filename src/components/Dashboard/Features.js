import React from 'react';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { TeamOutlined, UnorderedListOutlined, SyncOutlined } from '@ant-design/icons';
const { Meta } = Card;


function Features() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable>
              <Meta title="Jobs to be completed" />
              <p> <UnorderedListOutlined />   10</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable>
              <Meta title="Employees available" />
              <p><TeamOutlined />   05</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable>
              <Meta title="Job requests" />
             <p> <SyncOutlined spin />    03</p>
            </Card>
          </Col>



        </Row>
      </div>
    </div>
  );
}

export default Features;

