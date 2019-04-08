// import React, { Component } from 'react';
// // import './footer.css';
// import '../styles/footer.css';
// class Footer extends Component {
//   render() {
//     return (
//       <div class="footer" >
//        ALL COPYRIGHT RESERVERD @ Tech Star {new Date().getFullYear() }  --  POWERED BY <a href="http://www.websoftic.com"><b>WEBSOFTIC</b></a>
      
//       </div>
//     );
//   }
// }

// export default Footer;
import {Link } from 'react-router-dom';







import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="special-color-dark
      #263238" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title"><b>About TechStar</b></h4>
            <p>
            We pride ourselves in being a highly focused supply chain <br/>source for
             the most demanded CE products from<br/> the leading global brands..
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title"><b>Explore Us</b></h5>
            <ul>
             
    <ul>
                <Link to='./'>About Us</Link> 
              
    
</ul>
<ul>          
                <Link to='./company'>Organization</Link>

    
</ul>
<ul>         
        <Link to='./cooperation'>Cooperate Sector</Link>

    
</ul>
<ul>         
        <Link to='./productPortfolio'>Product Categories</Link>
              
     
</ul>
<ul>       
              <Link to='./contacts'>Contact Us</Link>

</ul>
<ul>
<Link to='./subscribe'>Subscribe Us</Link>

</ul>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
           {new Date().getFullYear()} Copyright: TechStar Powerd By: <a href="http://www.websoftic.com"> websoftic.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;