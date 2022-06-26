import React from 'react';
import { Col, Row, Card, Button } from 'antd';
import Sidebar from '../../components/Sidebar';
// import "../../components/Job.css";

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
                                <a href='/branch/jobs/int/new'><Button className='Button' type="primary">Newly Created Jobs</Button><br /><br /></a>
                                <a href='/branch/jobs/int/pending'><Button className='Button' type="primary">Jobs in Progress</Button><br /><br /></a>
                                <a href='/branch/jobs/int/comp'><Button className='Button' type="primary">Completed Jobs</Button><br /><br /></a>
                                
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card bordered={false}>
                                <h1>External jobs</h1><hr />
                                <a href='/branch/jobs/ext/req'><Button className='Button' type="primary">New job requests</Button><br /><br /></a>
                                <a href='/branch/jobs/ext/pending'><Button className='Button' type="primary">Jobs in Progress</Button><br /><br /></a>
                                <a href='/branch/jobs/ext/comp'><Button className='Button' type="primary">Completed Jobs</Button><br /><br /></a>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>

        </div>
    )
}

export default Jobs;