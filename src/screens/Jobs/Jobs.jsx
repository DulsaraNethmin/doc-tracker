import React from 'react';
import { Col, Row, Card, Button } from 'antd';
import Sidebar from '../../components/Sidebar';
import "../../components/Job.css";

function Jobs() {
    return (
        <div>
            {/* <Sidebar/> */}
            <div className='Background'>
                <div className='Cards'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card bordered={false}>
                                <h1>Internal Jobs</h1><hr />
                                
                                <Button className='Button' type="primary">New job requests</Button><br /><br />
                                <Button className='Button' type="primary">Jobs in Progress</Button><br /><br />
                                <Button className='Button' type="primary">Completed Jobs</Button><br /><br />
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card bordered={false}>
                                <h1>External jobs</h1><hr />
                                <Button className='Button' type="primary">New job requests</Button><br /><br />
                                <Button className='Button' type="primary">Jobs in Progress</Button><br /><br />
                                <Button className='Button' type="primary">Completed Jobs</Button><br /><br />
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>

        </div>
    )
}

export default Jobs;