import React from 'react';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function Features() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
        
            >
              <Meta title="Jobs to be completed" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              
            >
              <Meta title="Employees available" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              
            >
              <Meta title="Job requests" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default Features;


// import "antd/dist/antd.css";
// import React from 'react';
// import { Row, Col } from 'antd';
// import { Card } from 'antd';
// import { Button } from 'antd';
// const { Meta } = Card;

// function AppFeature() {
//   return (
//     <div id="feature" className="block featureBlock bgGray">
//       <Button type="primary">Primary Button</Button>
//       <div className="container-fluid">

//         <Row gutter={[16,16]}>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
           
//             >
//               <Meta title="Modern Design" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
             
//             >
//               <Meta title="Clean and Elegant" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
             
//             >
//               <Meta title="Great Support" />
//             </Card>
//           </Col>
          
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default AppFeature;