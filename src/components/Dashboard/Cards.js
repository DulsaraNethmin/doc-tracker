import React from 'react';
import { Card, Col, Row } from 'antd';
import "../Common.css"; 

const Cards = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Jobs to be completed" bordered={false}/>
        
      </Col>
      <Col span={8}>
        <Card title="Employees available" bordered={false}/>
      </Col>
      <Col span={8}>
        <Card title="Job requests" bordered={false}/>
      </Col>
    </Row>
  </div>
);

export default Cards;