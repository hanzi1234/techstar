import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
class Header extends React.Component{
    render(){
return(
<Navbar fixedTop>

<Navbar.Header>

    <Navbar.Brand>
        {/* <a href="#">EIdS</a> */}
    </Navbar.Brand> 
    <Navbar.Toggle/>
</Navbar.Header>
<Navbar.Collapse>
    <Nav>
<NavItem eventKey={1} href="#">Home</NavItem>
<NavItem eventKey={2} href="#">Home2</NavItem>

    </Nav>
</Navbar.Collapse>

</Navbar>


);


    }
}

export {Header};