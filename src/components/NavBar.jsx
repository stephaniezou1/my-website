import React from 'react';
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo.jsx'
import { SocialIcon } from 'react-social-icons';


const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="social-media">
                <SocialIcon url="https://twitter.com/StephanieXZou" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://github.com/stephaniezou1" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://www.linkedin.com/in/stephanie-zou/" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://medium.com/@stephaniezou" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://dev.to/stephaniezou" style={{ height: 25, width: 25 }}/>
            </div>
            <Navbar fill="true"  expand="lg">    
            <Navbar.Brand id="my-name"href="/"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="http://localhost:3000/">
                    <NavLink to="/" exact className="nav-link"> Home </NavLink> 
                    <NavLink to="/projects" exact className="nav-link">Projects</NavLink>
                    <NavLink to="/resume" exact className="nav-link">Resume</NavLink>
                    <NavLink to="/writing" exact className="nav-link">Writing+</NavLink> 
                </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}


export default NavBar;