import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Navbar , Nav , NavItem} from 'react-bootstrap';
class customNavbar extends Component {
    render() { 
        return (
<Navbar  collapseOnSelect>
<Navbar.Header>
<Navbar.Brand>
<Link to='./'>Websoftic</Link>
</Navbar.Brand>
<Navbar.Toggle/>
</Navbar.Header>
<Navbar.Collapse>
    <Nav pullRight>
    <NavItem eventKey={1} componentClass={Link}  href="/"to="/">
Home
    </NavItem>
    

   
    
    <NavItem eventKey={5} componentClass={Link}  href="/ourproducts" to="/ourproducts">
Our Products
    </NavItem>
    
    <NavItem eventKey={7} componentClass={Link}  href="/ourservices" to="/ourservices">
    Our Services

    </NavItem>
    <NavItem eventKey={6} componentClass={Link}  href="/portfolio" to="/portfolio">
 Portfolio
    </NavItem>
    <NavItem eventKey={4} componentClass={Link}  href="/carrer" to="/carrer">
Carrer
    </NavItem>
    <NavItem eventKey={2} componentClass={Link}  href="/about" to="/about">
About Us
    </NavItem>
    
        </Nav>
    </Navbar.Collapse>
    </Navbar>
            );
        }
    }
    export default customNavbar;