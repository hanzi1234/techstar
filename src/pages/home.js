import React, { Component } from 'react';
import Carousel from '../components/carousel';
// import MultiItemCarousel from '../components/multiItemCarousel';
import BestSellingProducts from '../components/productsComponents/bestSellingProducts';
import PartnersAndAlliences from '../components/partnerAndAlliences';
import PlateformMembers from '../components/plateformMembers';
class Home extends Component {
  render() {
    return (
      <div>
      
        <Carousel/>
      <BestSellingProducts/>
      <PartnersAndAlliences/>
      <PlateformMembers/>
      {/* <MultiItemCarousel/> */}
      <br/>
      </div>
    );
  }
}
export default Home;
