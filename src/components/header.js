import React, { Component } from 'react';
import NavBar from './navBar';
import logo from '../image/logos/TechstarLogo.png'

class Header extends Component {
  render() {
    return (
     
         <div style={{backgroundColor: "#166678"}}>
     
       <div  >
        <center> <img src={logo} width="200px"  alt="TechStarLogo"/></center>
        </div>
        <hr/>
        <NavBar/>
        <hr/>
        <br/>
      </div>
     
     
    );
  }
}
export default Header;
