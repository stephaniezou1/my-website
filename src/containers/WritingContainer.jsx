import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {Container, Row} from 'react-bootstrap'

const WritingContainer = () => {

    const onThesisClick = () => {
        window.open("https://docs.google.com/document/d/e/2PACX-1vRfeZCH1fkE6auJFtgodZL5ax5fAXwVmAIm22JJU0GBdbLG0mCeI-5lB0fuMY17WZer8_rrVd3L2B3x/pub")
    }

    const onPublicationClick = () => {
        window.open("https://medium.com/@stephaniezou")
    }

    return (
        <div className="writing-container">
            <h3 className="header">
                Writing
            </h3>
            <Container>
                <Row className="d-flex justify-content-center">
                <CardDeck className="writing-deck">

                    <Card className="writing-card">
                        <Card.Img variant="top" src={require("../images/medium.jpg")} />
                        <Card.Body>
                            <Card.Title>Technical Publications on Medium</Card.Title>
                            <Card.Text>
                            Published writer for the Startup and Level Up Coding
                            </Card.Text>
                            <Button variant="primary" onClick={onPublicationClick}>See publications</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card className="writing-card" >
                        <Card.Img variant="top" src={require("../images/nyu-purple.jpg")} />
                        <Card.Body>
                            <Card.Title>Undergraduate Thesis Paper for BPE</Card.Title>
                            <Card.Text>
                            Zoning Ordinances and Policies in the 20th Century: <br/>The Entrenchment of Racial Segregation in Urban America
                            </Card.Text>
                            <Button variant="primary" onClick={onThesisClick}>See paper</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
                </Row>
            </Container>
        </div>
    )
}

export default WritingContainer;