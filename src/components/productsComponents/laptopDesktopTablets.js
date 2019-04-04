import camerImage1 from '../../image/BRANDS/LaptopsDesktopsTeblets/acer.png';
import camerImage2 from '../../image/BRANDS/LaptopsDesktopsTeblets/amazon.png';
import camerImage3 from '../../image/BRANDS/LaptopsDesktopsTeblets/apple.jpg';
import camerImage4 from '../../image/BRANDS/LaptopsDesktopsTeblets/asus.png';
import camerImage5 from '../../image/BRANDS/LaptopsDesktopsTeblets/dell.png';
import camerImage6 from '../../image/BRANDS/LaptopsDesktopsTeblets/hp.png';
import camerImage7 from '../../image/BRANDS/LaptopsDesktopsTeblets/huawei.png';
import camerImage8 from '../../image/BRANDS/LaptopsDesktopsTeblets/lenovo.png';
import camerImage9 from '../../image/BRANDS/LaptopsDesktopsTeblets/microsoft.png';
import camerImage10 from '../../image/BRANDS/LaptopsDesktopsTeblets/msi.png';
import camerImage11 from '../../image/BRANDS/LaptopsDesktopsTeblets/samsung1.png';
import camerImage12 from '../../image/BRANDS/LaptopsDesktopsTeblets/toshiba.png';


import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class LaptopsDekstopsTeblets extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
      <hr/>
      <h3> LaptopsDekstopsTeblets</h3>
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
        <MDBRow center>
          <MDBCol lg="2" md="12" className="mb-3">
            <img src={camerImage7} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage8} className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage9} className="img-fluid z-depth-2" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="12" className="mb-4">
            <img src={camerImage10} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage11} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="2" md="6" className="mb-4">
            <img src={camerImage12} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow >
      </MDBContainer>
    );
  }
}

export default LaptopsDekstopsTeblets;