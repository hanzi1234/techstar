import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar , Nav , NavItem} from 'react-bootstrap';

class testheader extends Component {
    
    render() { 
        return (

<Navbar default collapseOnSelect>
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
    

   
    
        
    </Nav>
</Navbar.Collapse>
</Navbar>

          );
    }
}
 
export default testheader;