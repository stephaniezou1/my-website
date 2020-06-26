import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Project = (props) => {

    let {name, githubUrl, mediumUrl, techStack, description, dateCreated } = props.project
    return(
        <div >
            <CardDeck className="projects-deck"  >
            <Card >
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{techStack}</Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Link href={githubUrl}>GitHub Repo</Card.Link>
                    <Card.Link href={mediumUrl}>Medium Blog</Card.Link>                
                </Card.Body>
                <Card.Footer className="text-muted" >{dateCreated}</Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Project;