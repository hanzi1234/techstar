
import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";

const Contacts = () => {
  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
     
      <MDBRow>
     
        <MDBCol md="6" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <h3>Address:</h3> <h4> Plovdiv 4000 Plovdiv Municipality , South District 26 Skopie str.</h4>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
             <h3> VAT NO:</h3><h4> BG 205540461</h4>
            </li>
            </ul>
            </MDBCol>
            <MDBCol md="6" className="text-center">
            <ul className="list-unstyled mb-0">

            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <h3>Sales Team: </h3> <h4>Office@techstartrade.net</h4>
            </li>  <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <h3> Director:</h3> <h4>Martaewa779@gmail.com</h4>
            </li>  <li>

              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <h3>Accounts:</h3><h4> Accounting@bulgariancompanies.com</h4>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contacts;