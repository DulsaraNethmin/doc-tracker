import React from 'react'
import "./Common.css"
import {BellOutlined,UserOutlined} from '@ant-design/icons';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">

        <div className="topleft">
          <span className="logo">DocTracker</span>
        </div>

        <div className="topRight">
          <div className="topbarIconsContainer">
    
          {/* <span className="topIconBadge">2</span> */}
          </div>

          <img src="https://i.pinimg.com/originals/32/ec/06/32ec066eaef9f5cfff2a0d0fcb4b938c.jpg" alt="" className="topAvatar" />

          {/* <UserOutlined className="topAvatar"/> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
