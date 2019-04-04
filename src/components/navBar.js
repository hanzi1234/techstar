import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { MDBBtn,MDBNavbar,MDBNavbarToggler,MDBCollapse ,MDBNavbarNav,MDBNavItem} from "mdbreact";
class NavBar extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    
    return (
      <div>
        <center>
        <MDBNavbar color="white-color"  expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav>

        <MDBNavItem active>
        <Link to='./'><MDBBtn rounded outline color="info" >Home</MDBBtn></Link> </MDBNavItem>
        <Link to='./company'><MDBBtn rounded outline color="info" >Company</MDBBtn></Link>
        <Link to='./cooperation'><MDBBtn rounded outline color="info" >Cooperation</MDBBtn></Link>
        <Link to='./productPortfolio'><MDBBtn rounded outline color="info" >Product Portfolio</MDBBtn></Link>
        <Link to='./contacts'><MDBBtn rounded outline color="info" >Contacts</MDBBtn></Link>
        <Link to='./subscribe'><MDBBtn rounded outline color="info" >Subscribe</MDBBtn></Link>
        </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        
        </center>      </div>
    );
  }
}
export default NavBar;


