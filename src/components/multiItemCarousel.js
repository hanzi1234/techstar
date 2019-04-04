import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage} from "mdbreact";

const MultiItemCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} multiItem>
        <MDBCarouselInner>
          <MDBRow flex>
            <MDBCarouselItem itemId="1">
             
              <MDBRow flex>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  </MDBRow> 
              
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4" >
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                 
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">

              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />

                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiItemCarousel;