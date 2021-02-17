import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

const Rec = (props) => {

    console.log("props", props)
    let {title, name, genre, location, link} = props.rec

    const onItemClick = () => {
        window.open({link})
    }

    return(
        <div>
            <CardDeck className="projects-deck"  >
                <Card className="project-card">
                {/* <Card.Img variant="top" src={require("../images/medium.jpg")} /> */}
                <Card.Header as="h2">{title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {/* <Card.Text> </Card.Text> */}
                        {/* <Card.Subtitle>{genre}</Card.Subtitle> */}
                        <Card.Subtitle>{location}</Card.Subtitle>
                    <Card.Body>
                        <Card.Link variant="primary" onClick={onItemClick}>See More</Card.Link>
                    </Card.Body>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Rec;