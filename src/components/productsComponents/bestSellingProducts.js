import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";



import ssdImage from '../../image/BestSellingProducts/SSD-Background-PNG.png';
import appleImage from '../../image/BestSellingProducts/AppleiPhone.jpg';
import gamingImage from '../../image/BestSellingProducts/gaming2.png';
import ledImage from '../../image/BestSellingProducts/ledTvv.png';
import newprinterImage from '../../image/BestSellingProducts/MagicardPrinter.png';
import remoteACImage from '../../image/BestSellingProducts/remoteAC.jpg';



import chargerImage from '../../image/BestSellingProducts/charger.jpeg';
import blowerImage from '../../image/BestSellingProducts/Dyson_Supersonic_Black_Editio.png';
import headPhoneImage from '../../image/BestSellingProducts/headPhone.jpg';
import brushImage from '../../image/BestSellingProducts/HX6942_14-IMS-en_ID.jpg';
import straightnerImage from '../../image/BestSellingProducts/straightner.jpg';
import vrGlassesImage from '../../image/BestSellingProducts/vrGlasses.jpg';



// import tvImage from '../../image/BestSellingProducts/TV.jpg';
// import ps4Image from '../../image/BestSellingProducts/PS4.png';
// import iphoneImage from '../../image/BestSellingProducts/IPHONE.png';
// import hdImage from '../../image/BestSellingProducts/HD.jpg';
// import printerImage from '../../image/BestSellingProducts/printer.png';
// import air2Image from '../../image/BestSellingProducts/air2.png';





class BestSellingProducts extends React.Component {
  render() {
    return (
      <div>
      <MDBContainer className="mt-5" >
      <hr/>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Hot Selling Products
      
      </h2>
      
        <MDBRow>
          <MDBCol md="2">
            <MDBView hover>
              <img
              


                src={chargerImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Charging Accessories</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
        
                src={blowerImage}
                className="img-fluid"
                alt=""
              />
            <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Blowers</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
            
                src={headPhoneImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">HeadPhones</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
   
                src={brushImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Brushes</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={straightnerImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Straightners</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={vrGlassesImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">VR Glasses</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>
        <br/>
        <MDBRow>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={ssdImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">SSD, HDD</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={appleImage}
                className="img-fluid"
                alt=""
              />
            <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Mobile Phones</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={gamingImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Gaming Gadgets</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={ledImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">LED TV</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={newprinterImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">Remote Ac</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="2">
            <MDBView hover>
              <img
                src={remoteACImage}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <h6 className="white-text">White Goods</h6>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>
        
     {/* <br/>
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
        
        </MDBRow> */}
      </MDBContainer>
      </div>
    );
  }
}

export default BestSellingProducts;