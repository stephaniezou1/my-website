import React from 'react';
import Project from '../components/Project.jsx'
import allProjects from '../data/projects.js'
import {Container, Row} from 'react-bootstrap'

const ProjectContainer = () => {

    console.log("all projects", allProjects)
    let arrayOfProjects = allProjects.map((project) => {
        return <Project 
        key={project.id}
        project={project}
        />
    })

    return (
        <div>
            <h3 className="header">
                Technical Projects
            </h3>
            <Container>
                <Row xs="2">
                        {arrayOfProjects}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectContainer;