import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar id="footer" bg="dark" variant="dark">
                <Navbar.Brand id="footer" href="https://github.com/stephaniezou1">
                        Made by Stephanie Zou
                </Navbar.Brand>
                <div className="social-media">
                <SocialIcon className="social-icon" url="https://twitter.com/StephanieXZou" style={{ height: 25, width: 25 }}/>
                <SocialIcon className="social-icon" url="https://github.com/stephaniezou1" style={{ height: 25, width: 25 }}/>
                <SocialIcon className="social-icon" url="https://www.linkedin.com/in/stephanie-zou/" style={{ height: 25, width: 25 }}/>
                <SocialIcon className="social-icon" url="https://medium.com/@stephaniezou" style={{ height: 25, width: 25 }} bgColor="#FFFFFF"/>
                <SocialIcon className="social-icon" network="email" url="mailto:stephanie.zou3@gmail.com" target="_blank" style={{ height: 25, width: 25 }}/>
            </div>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <a id="footer-link" href="https://github.com/stephaniezou1/my-website">
                        GitHub Repo
                    </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar> 
      </div>
    )
}

export default Footer;