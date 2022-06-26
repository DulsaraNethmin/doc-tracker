import React from 'react';
import OrganizationDashboard from '../../screens/Organization/OrganizationDashboard'
import "../../screens/Branch/dashboard.css"




function AppHero() {
  return (
    <div  className="heroBlock">
   
       {/* <h1>He</h1> */}
         
            <div className="container-fluid">
              <div className="content">
              {/* <div className='OrganizationDashboard'>
        <OrganizationDashboard/>
        </div> */} <OrganizationDashboard/>
                <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
               <p className='fonts'>Welcome to <br/> DocTracker</p>
              </div>
            </div>  
          
        
    
    </div>
  );
}

export default AppHero;