import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo.jsx'
import { NavLink, withRouter } from 'react-router-dom'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                    <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }} />
                    Stephanie Zou
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/">Home</Menu.Item>
                    <Menu.Item as={NavLink} to="/projects" exact>Projects</Menu.Item>
                    <Menu.Item as={NavLink} to="/writing" exact>Writing</Menu.Item>
                    <Menu.Item as={NavLink} to="/resume" exact>Resume</Menu.Item>
                    <Menu.Item as={NavLink} to="/recommendations" exact>Recommendations</Menu.Item>
                </Container>
                </Menu>
               
        </div>
    )
}


export default NavBar;