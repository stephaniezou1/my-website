import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Intro from '../components/Intro.jsx'
import Photo from '../components/Photo.jsx';
import Image from 'react-bootstrap/Image'


const HomeContainer = () => {
    return (
        <div>
            <Image src={require("../images/resume.jpg")} fluid />
        <div className="home-container">
                 <h3 className="about-header">About Me</h3>
            <Container>
            <Row>
                <Col xs="8">
                    <Photo/>
                </Col>
                <Col xs="4">
                    <Intro/>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default HomeContainer;