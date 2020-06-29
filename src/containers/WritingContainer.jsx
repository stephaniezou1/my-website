import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const WritingContainer = () => {

    const onThesisClick = () => {
        window.open("https://docs.google.com/document/d/e/2PACX-1vRfeZCH1fkE6auJFtgodZL5ax5fAXwVmAIm22JJU0GBdbLG0mCeI-5lB0fuMY17WZer8_rrVd3L2B3x/pub")
    }

    const onPublicationClick = () => {
        window.open("https://medium.com/@stephaniezou")
    }

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={require("../images/nyu-purple.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Zoning Ordinances and Policies in the 20th Century: The Entrenchment of Racial Segregation in Urban America </h3>
                    <p>My undergraduate thesis paper for the Business and Political Economy (BPE) degree program at NYU Stern, completed December 2019</p>
                    <Button variant="outline-primary" size="lg" onClick={onThesisClick}>See paper </Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={require("../images/medium.jpg")}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Technical Publications on Medium</h3>
                    <p>Published writer for the Startup and Level Up Coding</p>
                    <Button variant="outline-primary" size="lg" onClick={onPublicationClick}>See publications </Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default WritingContainer;