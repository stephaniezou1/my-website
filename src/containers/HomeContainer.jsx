import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const HomeContainer = () => {
    return (
        <div className="home-container">
            <p className="intro">
                Hey, my name is Stephanie Zou. I am a Full-Stack Web Developer living in New York, NY.
            </p>
            <Container>
            <Row>
                <Col xs={6} md={10 }>
                <Image className="center" src={require("../images/picture1.JPG")} thumbnail/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomeContainer;