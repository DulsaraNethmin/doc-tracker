import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;


function AppHeader(label) {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      
      <div className="header">
        <div className="logo">
          {/* <i class="fas fa-bolt"></i> */}
          <h1>DocTracker</h1>
        </div>
       

      </div>
    </div>
  );
}

export default AppHeader;