import camerImage1 from '../../image/BRANDS/Cameras/canon.png';
import camerImage2 from '../../image/BRANDS/Cameras/gopro.png';
import camerImage3 from '../../image/BRANDS/Cameras/fujitsu.png';
import camerImage4 from '../../image/BRANDS/Cameras/nikon.png';
import camerImage5 from '../../image/BRANDS/Cameras/panasonic.png';
import camerImage6 from '../../image/BRANDS/Cameras/sony.png';


import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Cameras extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
      <hr/>
      <h3> Cameras</h3>
        <MDBRow center>
          <MDBCol lg="2" md="12" className="mb-3">
            <img src={camerImage1} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage2} className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage3} className="img-fluid z-depth-2" alt="" />
          </MDBCol>
       
          <MDBCol lg="2" md="12" className="mb-4">
            <img src={camerImage4} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage5} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage6} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow >
      </MDBContainer>
    );
  }
}

export default Cameras;