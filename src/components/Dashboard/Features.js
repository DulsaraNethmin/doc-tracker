import React from "react";
import { Card } from 'antd';
import { Row, Col } from 'antd';
import "../Dashboard.css";

const { Meta } = Card;

function feactures() {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <Row gutter={[16, 16]}>

                    <Col span={8}>

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>

                        {/* <Card
                            hoverable
                            style={{ width: 240 }}
                            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Jobs to be completed"  />
                            <br />
                            <p>10</p>
                        </Card> */}
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Employees available" /><br />
                            <p>10</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                        // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Jobs reques" />
                            <br />
                            <p>10</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default feactures;


