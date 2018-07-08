import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Routing
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//Import containers
import NewBracketContainer from './containers/NewBracketContainer';
import AddTeamsContainer from './containers/AddTeamsContainer';
import MatchViewContainer from './containers/MatchViewContainer';
import WinnerContainer from './containers/WinnerContainer';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={NewBracketContainer}/>
            <Route path='/add-teams' component={AddTeamsContainer}/>
            <Route path = "/match-view" component={MatchViewContainer}/>
            <Route path = "/game-won" component={WinnerContainer}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
