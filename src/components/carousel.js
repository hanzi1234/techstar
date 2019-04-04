import React from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem,  MDBContainer } from
"mdbreact";

const cameraImage = require('../image/SLIDERS/camaras.jpg');
const domesticoImage = require('../image/SLIDERS/domestico.jpg');
const hddImage = require('../image/SLIDERS/hdd.jpg');
const laptopImage = require('../image/SLIDERS/laptop.jpg');
const phoneImage = require('../image/SLIDERS/phone.jpg');
const playImage = require('../image/SLIDERS/play.jpg');
const printerImage = require('../image/SLIDERS/printer1.jpg');
const tvImage = require('../image/SLIDERS/tv.jpg');

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={7} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          
          <MDBCarouselItem itemId="1">
              <img src={cameraImage} alt="First slide" />
          </MDBCarouselItem>
         
          <MDBCarouselItem itemId="2">
              <img className="d-block w-100" src={tvImage} alt="Second slide" />
          </MDBCarouselItem>
        
          <MDBCarouselItem itemId="3">
              <img className="d-block w-100" src={hddImage} alt="Third slide" />
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
              <img className="d-block w-100" src={laptopImage} alt="Mattonit's item" />
          </MDBCarouselItem>

          <MDBCarouselItem itemId="5">
              <img className="d-block w-100" src={phoneImage} alt="Mattonit's item" />
          </MDBCarouselItem>

          <MDBCarouselItem itemId="6">
              <img className="d-block w-100" src={playImage} alt="Mattonit's item" />
          </MDBCarouselItem>

          <MDBCarouselItem itemId="7">
              <img className="d-block w-100" src={printerImage} alt="Mattonit's item" />
          </MDBCarouselItem>

          <MDBCarouselItem itemId="8">
              <img className="d-block w-100" src={tvImage} alt="Mattonit's item" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="9">
              <img className="d-block w-100" src={domesticoImage} alt="Mattonit's item" />
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;