import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Routing
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Import other components
import NewBracket from './components/new-bracket/New-Bracket';
import AddTeams from './components/add-teams/add-teams';
import MatchView from './components/match-view/match-view';
import GameWon from './components/game-won/game-won';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={NewBracket}/>
            <Route path='/add-teams' component={AddTeams}/>
            <Route path = "/match-view" component={MatchView}/>
            <Route path = "/game-won" component={GameWon}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
