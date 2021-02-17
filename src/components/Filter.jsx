import React, {Component} from 'react';

const Filter = (props) => {

    let handleSelect = (evt) => {
        this.props.handleGenreFilter(evt.target.value)
    }

    console.log("props", props)

    return (
        <div>
        <nav>
            <h2>Filter By:</h2>
            <select 
            id="1" 
            value={props.houseFilterTerm} 
            onChange={handleSelect}>
            <option value="All">All</option>
            <option value={props.recs.genre}></option>
            </select>
            </nav>
        </div>
    )
}

export default Filter;