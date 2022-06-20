import React from 'react';
import JobHome from '../../components/JobHome';
import { Col, Divider, Row, Card, Button, Checkbox, Form, Input, Steps } from 'antd';
// import "./components/Job.css";

function Jobs() {
    return (
        <div>
            {/* <JobHome /> */}
            <div className='Background'>
                <div className='Cards'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card bordered={false}>
                                <h1>Internal Jobs</h1>               
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card bordered={false}>
                                <h1>External jobs</h1>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>

        </div>
    )
}

export default Jobs;