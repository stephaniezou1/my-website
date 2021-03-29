import React, { Component } from 'react';
import pdfFile from '../files/stephanie_zou_resume.pdf'
import { 
    Card, Button, Image, Grid, Segment
} from 'semantic-ui-react'

export default class ResumeContainer extends Component {

    onResumeClick() {
        window.open(pdfFile);
    }

    render() {
    return (
        <div class="resume-container">
        <div class="ui centered card">
              <Card>
                <Image src={require("../images/profile.jpg")} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Stephanie's Resume</Card.Header>
                {/* <Card.Meta>
                    <span className='date'>Los Angeles, CA</span>
                </Card.Meta> */}
                <Card.Description>
                    Stephanie works in strategy at the Walt Disney Company and freelances as a full-stack web developer. 
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                <Grid>
                    <Grid.Column textAlign="center">
                    <Button primary onClick={this.onResumeClick}>View PDF</Button>
                    </Grid.Column>
                </Grid>
                </a>
                </Card.Content>
            </Card>
            </div>
        </div>
    )}
};