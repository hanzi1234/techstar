import React, { Component } from 'react';
import Cameras from '../components/productsComponents/cameras';
import CpuGpu from '../components/productsComponents/cpuGpu';
import Gaming from '../components/productsComponents/gaming';
import HomeEntertainment from '../components/productsComponents/homeEntertainment';
import LaptopDesktopTablets from '../components/productsComponents/laptopDesktopTablets';
import LedTv from '../components/productsComponents/ledTv';
import Networking from '../components/productsComponents/networking';
import PrintersCartridges from '../components/productsComponents/printersCartridges';
import SsdHhdCards from '../components/productsComponents/SsdHddCard';
import WhiteGoodsSma from '../components/productsComponents/whiteGoodsSma';
import MobilePhones from '../components/productsComponents/mobilePhones';

class productPortfolio extends Component {
  render() {
    return (
      <div>
<br/>
<h2 className="h1-responsive font-weight-bold text-center my-5">
Product Portfolio
      
      </h2>
<Cameras/>
<CpuGpu/>
<Gaming/>
<HomeEntertainment/>
<LaptopDesktopTablets/>
<LedTv/>
<MobilePhones/>
<Networking/>
<PrintersCartridges/>
<SsdHhdCards/>
<WhiteGoodsSma/>

      </div>
    );
  }
}

export default productPortfolio;
