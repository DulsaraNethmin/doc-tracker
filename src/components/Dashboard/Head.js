
import React from 'react';
import "../Dashboard.css";
import Tbl from './Table.js';
import WidgetSm from "./Widget";

// const {Content} = Layout;
const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

function Head() {
    return (
        <div>
            <div className='head' >
                <h1>Welcome to DocTracker
                </h1><br />
                <h2 className='headerH1'>{date}</h2>

            </div><div></div>
            <WidgetSm />
            <Tbl />
        </div>
    );
}

export default Head;