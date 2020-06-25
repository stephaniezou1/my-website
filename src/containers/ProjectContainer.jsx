import React from 'react';
import Project from '../components/Project.jsx'
import allProjects from '../data/projects.js'

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
            <div>
            {arrayOfProjects}
            </div>
        </div>
    )
}

export default ProjectContainer;