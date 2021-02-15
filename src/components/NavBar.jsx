import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo.jsx'
import { NavLink, Link } from 'react-router-dom'
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
                    <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                    <Menu.Item as={NavLink} to="/projects" exact>Projects</Menu.Item>
                    <Menu.Item as={NavLink} to="/writing" exact>Writing</Menu.Item>
                    <Menu.Item as={NavLink} to="/resume" exact>Resume</Menu.Item>
                    <Menu.Item as={NavLink} to="/recommendations" exact>Recommendations</Menu.Item>
                    <Dropdown item simple text='Contact'>
                        <Dropdown.Menu>
                            <Dropdown.Item as="a" href="mailto:stephanie.zou3@gmail.com">Email</Dropdown.Item>
                            <Dropdown.Item as="a" href="https://github.com/stephaniezou1">GitHub</Dropdown.Item>
                            <Dropdown.Item as="a" href="https://www.linkedin.com/in/stephanie-zou/">LinkedIn</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Socials</Dropdown.Header>
                            <Dropdown.Item as="a" href="https://twitter.com/StephanieXZou">Twitter</Dropdown.Item>
                            <Dropdown.Item as="a" href="https://medium.com/@stephaniezou">Medium</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </Container>
                </Menu>
               
        </div>
    )
}


export default NavBar;