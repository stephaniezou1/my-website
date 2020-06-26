import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Intro from '../components/Intro.jsx'
import Photo from '../components/Photo.jsx';

const HomeContainer = () => {
    return (
        <div className="home-container">
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
    )
}

export default HomeContainer;