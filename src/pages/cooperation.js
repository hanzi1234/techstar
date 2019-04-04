import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import image from '../image/PARTNERS/cooperation.jpg';
const Cooperation = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          COOPERATION
        </h2>
      

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={image}
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">ESTABLISHED RELATIONSHIPS</h5>
                <p className="grey-text">
                We have developed extensive and well established relationships with leading suppliers,
                 manufacturers & specialist distributors from all over the world which allow us to establish 
                long-term and mutually beneficial business relations with our business partners.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">CLIENTS</h5>
                <p className="grey-text">
                Our customers are traders, wholesalers,
                 mobile network operators, independent & chain retailers and e-retailers..
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">PRIDE</h5>
                <p className="grey-text">
                We pride ourselves in being a highly focused supply chain
                 source for the most demanded CE products from the leading global brands.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">FOR SUPPLIERS</h5>
                <p className="grey-text">
                TECH STAR is ready to collaborate with reputable companies from all 
                over the world. Please contact us so we can provide feedback 
                and communicate with your company in order to discuss cooperation opportunities..
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Cooperation;