import React from 'react';
import "./Job.css";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function JobHome() {
  const navigate = useNavigate();
  return (
    <div className='Background'>
      <div className='button'>
      <Button className='btn1' type="primary" onClick={(e) => {navigate("JobsInProgress");}}>Jobs in progress</Button>
      <Button className='btn2' type="primary" onClick={(e) => {navigate("NewJobRequests");}}>New job requests</Button>
      <Button className='btn3' type="primary" onClick={(e) => {navigate("CompletedJobs");}}>Completed jobs</Button>
      {/* <Button className='btn4' type="primary">Job tracking</Button> */}
      </div>
    </div>
  );
}

export default JobHome;