import React from 'react';
import { BackTop } from 'antd';

export default function
  () {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="copyright">
          My doc tracker
          &copy;|Copy rights allowed |all right reserved
        </div>
        <BackTop>
          <div className="goTop"><i class="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  )
}
