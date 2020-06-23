import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeContainer from './containers/HomeContainer'
import ProjectContainer from './containers/ProjectContainer'
import ResumeContainer from './containers/ResumeContainer'
import WritingContainer from './containers/WritingContainer'
import ContactContainer from './containers/ContactContainer'

import './App.css';

// Routing
import {Route, Switch} from 'react-router-dom'

function App() {
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
          <Route exact path="/contact">
            <ContactContainer/>
          </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
