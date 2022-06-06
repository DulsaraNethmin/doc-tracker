import React from "react";
import Header from "../components/Dashboard/Header";
import Tbl from "../components/Dashboard/Table";
import Cards from "../components/Dashboard/Cards";
import "./Dashboard.css";
import { Card, Col, Row } from 'antd';

function Dashboard() {
    return (
        <div>
            <Header />
            <Cards />
            <div>
                <div className="small">
                    <h1>Hi</h1>
                </div>
                <div className="large">
                    <Tbl />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;