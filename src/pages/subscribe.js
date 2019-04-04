
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const Subscribe = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <form>

          <h2 className="h1-responsive font-weight-bold my-5">
          Subscribe Us:
          </h2>
          
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="black">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Subscribe;
