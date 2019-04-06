import React, { Component } from 'react';
// import NavBar from './navBar';
// import logo from '../image/logos/TechstarLogo.png'
import SideNavPage from '../components/testheader'

class Header extends Component {
  render() {
    return (
     
         <div style={{backgroundColor: "#166678"}}>
     
     
        {/* <center> <img src={logo} width="200px"  alt="TechStarLogo"/></center>
        </div>
        <hr/>
        <NavBar/> */}
        <SideNavPage/>
        
      </div>
     
     
    );
  }
}
export default Header;
