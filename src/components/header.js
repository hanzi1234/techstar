import React, { Component } from 'react';
// import NavBar from './navBar';
import logo from '../image/logos/TechstarLogo.png'
import Navbar from './testheader';
class Header extends Component {
  render() {
    return (
     
         <div style={{backgroundColor: "#166678"}}>
     
     
         <center> <img src={logo} width="200px"  alt="TechStarLogo"/></center>
      
        <hr/>
        {/* <NavBar/> */}
        <Navbar/>
        
      </div>
     
     
    );
  }
}
export default Header;
