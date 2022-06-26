import React from 'react';

import { BackTop } from 'antd';
import { FacebookOutlined, TwitterOutlined,LinkedinOutlined,InstagramOutlined} from '@ant-design/icons';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          
          <a>DocTracker</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><FacebookOutlined /></a></li>
          <li><a href="https://www.twitter.com/"><TwitterOutlined /></a></li>
          <li><a href="https://www.linkedin.com/"><LinkedinOutlined /></a></li>
          <li><a href="https://www.instagram.com/"><InstagramOutlined /></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 DocTracker</div>
        <BackTop />
      </div>
    </div>
  );
}

export default AppFooter;