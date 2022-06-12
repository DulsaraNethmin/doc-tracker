import React from 'react';
import "./Job.css";
import { Button } from 'antd';

function JobHome() {
  return (
    <div className='Background'>
      <div className='button'>
      <Button className='btn1' type="primary">Jobs in progress</Button>
      <Button className='btn2' type="primary">New job requests</Button>
      <Button className='btn3' type="primary">Completed jobs</Button>
      <Button className='btn4' type="primary">Job tracking</Button>
      </div>
    </div>
  );
}

export default JobHome;