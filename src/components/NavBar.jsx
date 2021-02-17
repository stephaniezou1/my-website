import React from 'react';
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from './Logo.jsx'


const NavBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Stephanie Zou</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" defaultActiveKey="http://localhost:3000/">
                <Nav.Link href="/" exact>Home</Nav.Link>
                <Nav.Link href="/code" exact>Coding</Nav.Link>
                <Nav.Link href="/writing" exact>Writing</Nav.Link>
                <Nav.Link href="/resume" exact>Resume</Nav.Link>
                <Nav.Link href="/recs" exact>Recs</Nav.Link>
                </Nav>
                <Nav>
                <NavDropdown title="Contact" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="mailto:stephanie.zou3@gmail.com">Email</NavDropdown.Item>
                        <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/stephaniezou1">GitHub</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.linkedin.com/in/stephanie-zou/">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item href="https://twitter.com/StephanieXZou">Twitter</NavDropdown.Item>
                    <NavDropdown.Item href="https://medium.com/@stephaniezou">Medium</NavDropdown.Item>
                </NavDropdown>
                    {/* <Nav.Link href="mailto:stephanie.zou3@gmail.com">Email</Nav.Link>
                    <Nav.Link href="https://github.com/stephaniezou1">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/stephanie-zou/">LinkedIn</Nav.Link>
                    <Nav.Link href="https://twitter.com/StephanieXZou">Twitter</Nav.Link>
                    <Nav.Link href="https://medium.com/@stephaniezou">Medium</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default NavBar;

// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from 'react-router-dom'
// import {
//     Container,
//     Icon,
//     Image,
//     Menu,
//     Sidebar,
//     Responsive,
//     Dropdown
//   } from "semantic-ui-react";

// const NavBar = () => {
//     return(
//         <div className="nav-bar">
//             <Menu stackable fixed='top' inverted>
//                 <Container>
//                     <Menu.Item as={NavLink} to="/" exact header>
//                     Stephanie Zou
//                     </Menu.Item>
//                     <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
//                     <Dropdown item simple text='Projects'>
//                         <Dropdown.Menu>
//                             <Dropdown.Item as={NavLink} to="/projects" exact>Code</Dropdown.Item>
//                             <Dropdown.Item as={NavLink} to="/writing" exact>Writing</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                     <Menu.Item as={NavLink} to="/resume" exact>Resume</Menu.Item>
//                     <Menu.Item as={NavLink} to="/recs" exact>Recs</Menu.Item>
//                     <Dropdown item simple text='Contact'>
//                         <Dropdown.Menu>
//                             <Dropdown.Item as="a" href="mailto:stephanie.zou3@gmail.com">Email</Dropdown.Item>
//                             <Dropdown.Item as="a" href="https://github.com/stephaniezou1">GitHub</Dropdown.Item>
//                             <Dropdown.Item as="a" href="https://www.linkedin.com/in/stephanie-zou/">LinkedIn</Dropdown.Item>
//                             <Dropdown.Divider />
//                             <Dropdown.Header>Socials</Dropdown.Header>
//                             <Dropdown.Item as="a" href="https://twitter.com/StephanieXZou">Twitter</Dropdown.Item>
//                             <Dropdown.Item as="a" href="https://medium.com/@stephaniezou">Medium</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Container>
//                 </Menu>
            
//              </div>
//         )
//     }

// export default NavBar