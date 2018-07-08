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
import MatchView from './components/match-view/match-view';
import GameWon from './components/game-won/game-won';

//Import containers
import NewBracketContainer from './containers/NewBracketContainer';
import AddTeamsContainer from './containers/AddTeamsContainer'

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
            <Route path = "/match-view" component={MatchView}/>
            <Route path = "/game-won" component={GameWon}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
