import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
    return (
        <div className="footer">
            <Navbar id="footer" bg="dark" variant="dark">
                <Navbar.Brand id="footer" href="https://github.com/stephaniezou1">
                        Made by Stephanie Zou
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <a id="footer-link" href="https://github.com/stephaniezou1/news_frontend">
                        GitHub Repo
                    </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar> 
      </div>
    )
}

export default Footer;