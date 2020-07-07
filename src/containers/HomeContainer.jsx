import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Intro from '../components/Intro.jsx'
import Image from 'react-bootstrap/Image'

const HomeContainer = () => {
    return (
        <div>
        <div className="home-container">
                 <h3 className="about-header">About Me</h3>
            <Container>
            <Row>
                <Col xs="3" md="5">
                    <Image class="img-thumbnail img-responsive shadow float-left" src={require("../images/picture1.JPG")} thumbnail/>
                </Col>
                <Col>
                    <Intro/>
                </Col>
            </Row>
            </Container>
        </div>
            <Image src={require("../images/resume.jpg")} fluid />
        </div>
    )
}

export default HomeContainer;