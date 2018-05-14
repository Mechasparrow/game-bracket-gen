import React, { Component } from 'react';
import './match-view.css';

import Bracket from '../../lib/bracket.js';

// Import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

class MatchView extends Component {

  constructor(props) {
    super(props);

    var bracket;
    var restart = false;

    try {
      bracket = this.props.location.state.current_bracket;
      if ((bracket instanceof Bracket) == false){
        throw "Not a valid bracket!";
      }

    }catch (err) {
      bracket = undefined;
      restart = true;
      console.log(err);
    }

    this.state = {
      current_bracket: bracket,
      current_match: null,
      restart: restart
    }

    this.getNewMatch = this.getNewMatch.bind(this);
    this.goHomeRedirect = this.goHomeRedirect.bind(this);

    if (this.state.current_bracket != undefined) {
      this.getNewMatch();
    }

  }

  goHomeRedirect() {

    if (this.state.restart == true) {
      return (<Redirect push to = {{
              pathname: '/',
              state: {
                  from : this.props.location,
              }
      }}/>);
    }else {
      return (
        <div></div>
      )
    }

  }

  getNewMatch() {

    var new_state = this.state;

    var new_match = this.state.current_bracket.getUncompletedMatchFromCurrentRound();

    new_state.current_match = new_match;

    this.setState(new_state)

  }

  // Function that completes the match with either player_one or player_two as the winner
  // TODO
  completeMatch(winner) {

  }

  render() {

    if (this.state.current_bracket != undefined) {
      return (
        <div className = "container-fluid">
          <br/>
          <h2>Round {this.state.current_bracket.current_round}</h2>
          <h1 className = "match-title">{this.state.current_match.player_one} V {this.state.current_match.player_two}</h1>

          <div className = "choice-buttons row">
            <div className = "col btn-option">
              <button className = "btn btn-block btn-primary">
                <img className = "btn-arrow" width = "50" height = "50" src = "/assets/images/arrow-left.svg"/>
              </button>

            </div>
            <div className = "col btn-option">
              <button className = "btn btn-block btn-primary">
                <img className = "btn-arrow" width = "50" height = "50" src = "/assets/images/arrow-right.svg"/>
              </button>

            </div>

          </div>

          {this.goHomeRedirect()}
        </div>
      )
    }
    // Else (return just a redirect)
    else {
      return (
        <div>
          <br/>
          {this.goHomeRedirect()}
        </div>
      )
    }


  }

}

export default MatchView;
