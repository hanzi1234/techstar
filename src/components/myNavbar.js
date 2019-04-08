import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import logo from '../image/logos/TechstarLogonew2.png';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="special-color-dark
      #263238" dark expand="md"   scrolling fixed="top">
       <MDBNavbarBrand >
          <img src={logo} height="60" alt="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler left onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
             <Link to="/"><span style={Styles.item}> Home</span> </Link>
            </MDBNavItem>
          
              
            <MDBNavItem> 
            <Link to="/company"><span style={Styles.item}>Organization</span> </Link>
             
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/cooperation"><span style={Styles.item}>Cooperate Sector</span> </Link>
             
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/productPortfolio"><span style={Styles.item}>Product Categories</span> </Link>
             
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/contacts"><span style={Styles.item}>Contact Us</span> </Link>
             
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/subscribe"><span style={Styles.item}>Subscribe Us</span> </Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav left>
        
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;

const Styles ={


item:{   
  color:  "white",
padding: 15
  }
}