import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Intro from '../components/Intro.jsx'

const HomeContainer = () => {
    return (
        <div className="home-container">
            <Container>
            <Row>
                <Col xs={6} md={8}>
                <Image class="mx-auto d-block" src={require("../images/picture1.JPG")} thumbnail/>
                </Col>
                <Intro/>
            </Row>
            </Container>
        </div>
    )
}

export default HomeContainer;