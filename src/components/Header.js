import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd';

function Header() {
    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="HeaderBlock">
            <div className="container">
                <Row>
                    <Col span={16}><h1>Welcome to DocTracker</h1></Col>
                    <Col span={8}><h4><p> {date.toLocaleTimeString()}</p><p>  {date.toLocaleDateString()}</p> </h4></Col>
                </Row>
            </div>
        </div>
    );
}

export default Header;