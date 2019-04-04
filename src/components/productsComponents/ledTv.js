import camerImage1 from '../../image/BRANDS/LedTv/lg.png';
import camerImage2 from '../../image/BRANDS/LedTv/philips.jpg';
import camerImage3 from '../../image/BRANDS/LedTv/samsung1.png';
import camerImage4 from '../../image/BRANDS/LedTv/sharp.png';
import camerImage5 from '../../image/BRANDS/LedTv/sony.png';
import camerImage6 from '../../image/BRANDS/LedTv/toshiba.png';


import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class LedTv extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
      <hr/>
      <h3> Led Tv</h3>
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

export default LedTv;