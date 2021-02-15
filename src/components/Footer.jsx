import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar id="footer" bg="dark" variant="dark">
                <Navbar.Brand id="footer" href="https://github.com/stephaniezou1">
                        Made with React.js by Stephanie Zou
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <a id="footer-link" href="https://github.com/stephaniezou1/my-website">
                        Check out how I built this - GitHub Repo 
                    </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar> 
      </div>
    )
}

export default Footer;