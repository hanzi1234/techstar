import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import gsmb2baImage from '../image/TRADEPLATEFORMS/gsmb2ba.png';
import gsmexchangeaImage from '../image/TRADEPLATEFORMS/gsmexchangea.png';
import handelotaImage from '../image/TRADEPLATEFORMS/handelota.png';
import iptImage from '../image/TRADEPLATEFORMS/ipt.png';

class PlateformMembers extends React.Component {
  render() {
    return (
      
      <MDBContainer className="mt-5">
         <hr/>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Platform Members
      
      </h2>    
      
        <MDBRow center>
       
          <MDBCol md="3">
            <MDBView hover>
              <img
                src={gsmb2baImage}
                className="img-fluid"
                alt=""
              /> <a href="https://gsm-b2b.com/">
              <MDBMask className="flex-center" overlay="grey-light">
              </MDBMask></a>
            </MDBView>
          </MDBCol>
          
          <MDBCol md="3">
            <MDBView hover>
              <img
                src={gsmexchangeaImage}
                className="img-fluid"
                alt=""
              />
            <a href="https://www.gsmexchange.com/">
              <MDBMask className="flex-center" overlay="grey-light">
              </MDBMask></a>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover>
              <img
                src={handelotaImage}
                className="img-fluid"
                alt=""
              />
            <a href="https://www.handelot.com/">
              <MDBMask className="flex-center" overlay="grey-light">
              </MDBMask></a>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover>
              <img
                src={iptImage}
                className="img-fluid"
                alt=""
              />
             <a href="https://www.igt.cc/">
              <MDBMask className="flex-center" overlay="grey-light">
              </MDBMask></a>
            </MDBView>
          </MDBCol>
         
        
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PlateformMembers;