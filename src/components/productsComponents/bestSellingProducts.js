import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import tvImage from '../../image/BestSellingProducts/TV.jpg';
import ps4Image from '../../image/BestSellingProducts/PS4.png';
import iphoneImage from '../../image/BestSellingProducts/IPHONE.png';
import hdImage from '../../image/BestSellingProducts/HD.jpg';
import printerImage from '../../image/BestSellingProducts/printer.png';
import air2Image from '../../image/BestSellingProducts/air2.png';

class BestSellingProducts extends React.Component {
  render() {
    return (
      
      <MDBContainer className="mt-5" >
      <hr/>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Best Selling Products
      
      </h2>
        <MDBRow>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={tvImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">LED TV's, Monitors</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={ps4Image}
                className="img-fluid"
                alt=""
              />
            <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Gaming</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={iphoneImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Mobiles, Tablets</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={hdImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Components</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={printerImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Printers & Cartridges</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={air2Image}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">White Goods</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>
     
      </MDBContainer>
    );
  }
}

export default BestSellingProducts;