import React, { Component } from 'react';
import pdfFile from '../files/stephanie_zou_resume_2020.pdf'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ResumeContainer extends Component {

    onResumeClick() {
        window.open(pdfFile);
    }

    render() {
    return (
        <div className="resume-container">
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Resume</Card.Title>
                    <Card.Text>
                    Email: stephanie.zou3@gmail.com
                    </Card.Text>
                    <Button variant="primary" onClick={this.onResumeClick}>Resume PDF</Button>
                </Card.Body>
                <Card.Footer className="text-muted">June 2020</Card.Footer>
            </Card>
        </div>
    )}
};