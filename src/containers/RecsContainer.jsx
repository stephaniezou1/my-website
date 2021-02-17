import React from 'react';
import Rec from '../components/Rec.jsx'
import allRecs from '../data/recommendations.js'
import {Container, Row} from 'react-bootstrap'
import Filter from '../components/Filter.jsx'

const RecsContainer = (props) => {

    let arrayOfRecs = allRecs.map((rec) => {
        return <Rec
        key = {rec.id}
        rec = {rec}
        />
    })
    
    return (
        <div className="recs-container">
            <h3 className="header">
                My Spots in Los Angeles
            </h3>
            {/* <Filter
                recs={arrayOfRecs}
                handleGenreFilter = {props.handleGenreFilter}
            /> */}
            <Container>
                <Row xs="2">
                    {arrayOfRecs}
                </Row>
            </Container>
        </div>
    )
}

export default RecsContainer;