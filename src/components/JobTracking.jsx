import React from 'react';
import { Col, Divider, Row, Card, Button, Checkbox, Form, Input, Steps } from 'antd';
import "./Job.css";

const { Step } = Steps;

function JobTracking() {
    return (
        <div className='Background'>
            <div className='Cards'>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            <Form>
                                <Form.Item label="Job ID" name="id">
                                    <label htmlFor=""></label>
                                </Form.Item>

                                <Form.Item label="Admin ID" name="admin_id">
                                    <label htmlFor=""></label>
                                </Form.Item>

                                <Form.Item label="Deliverer ID" name="customer_id">
                                    <label htmlFor=""></label>
                                </Form.Item>

                                <Form.Item label="Customer ID" name="customer_id">
                                    <label htmlFor=""></label>
                                </Form.Item>

                                <Form.Item label="Document ID" name="doc_id">
                                    <label htmlFor=""></label>
                                </Form.Item>

                                <Form.Item label="Created date" name="createdAt">
                                    <label htmlFor=""></label>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            <Steps direction="vertical" current={1}>
                                <Step title="Finished" description="Order recieved" />
                                <Step title="In Progress" description="Order confirmed" />
                                <Step title="Waiting" description="Desitination 1" />
                                <Step title="Waiting" description="Destination 2" />
                                <Step title="Waiting" description="Received" />
                            </Steps>
                        </Card>
                    </Col>
                </Row>






            


            </div>
        </div>
    );
}

export default JobTracking