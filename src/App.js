import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeContainer from './containers/HomeContainer'
import ProjectContainer from './containers/ProjectContainer'
import ResumeContainer from './containers/ResumeContainer'
import WritingContainer from './containers/WritingContainer'
import RecsContainer from './containers/RecsContainer';

import './App.css';

// Routing
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {

  state = {
    genreFilter: "All"
  }

  handleGenreFilter = (selectedFilter) => {
    this.setState({
      genreFilter: selectedFilter
    })
  }

  render (){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
            <Route exact path="/">
              <HomeContainer/>
            </Route>
            <Route exact path="/projects">
              <ProjectContainer/>
            </Route>
            <Route exact path="/resume">
              <ResumeContainer/>
            </Route>
            <Route exact path="/writing">
              <WritingContainer/>
            </Route>
            <Route exact path="/recs">
              <RecsContainer
              genreFilter = {this.state.genreFilter}
              handleGenreFilter = {this.handleGenreFilter}
              />
            </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
