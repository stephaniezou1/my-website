import React from 'react';
import Intro from '../components/Intro.jsx'
import {
    Container,
    Header
  } from 'semantic-ui-react'

const HomeContainer = () => {
    return (
        <div>
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Home</Header>
                <p> <Intro/></p>

                {/* <Image src={require("../images/profile.jpg")} style={{ marginTop: '2em' }} /> */}
                
            </Container>
        </div>
    )
}

export default HomeContainer;