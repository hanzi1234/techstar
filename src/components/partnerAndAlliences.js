import React from "react";
import {  MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import dfkIGTImage from '../image/PARTNERS/dfkIGT.jpg';
import helvetiaIGTImage from '../image/PARTNERS/helvetiaIGT.jpg';


class PartnersAndAlliences extends React.Component {
  render() {
    return (
      
      <MDBContainer className="mt-5" >
        <hr/>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Partners And Alliences
      
      </h2>    
        <MDBRow center>
          <MDBCol md="5">
            <MDBView hover>
             <a href="http://dfk.com/"> <img
                src={dfkIGTImage}
                className="img-fluid"
                alt=""
              />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="5">
            <MDBView hover>
            <a href="https://www.helvetia.com/">
              <img
                src={helvetiaIGTImage}
                className="img-fluid"
                alt=""
              /></a>
           
            </MDBView>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PartnersAndAlliences;