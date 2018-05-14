import React, { Component } from 'react';
import './match-view.css';

import Bracket from '../../lib/bracket.js';
import Match from '../../lib/match.js';


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
      bracket_completed: false,
      restart: restart
    }

    this.getNewMatch = this.getNewMatch.bind(this);
    this.goHomeRedirect = this.goHomeRedirect.bind(this);
    this.completeMatch = this.completeMatch.bind(this);


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

    if (new_match != null) {
      new_state.current_match = new_match;

      if (new_state.current_match.player_one == null && new_state.current_match.player_two == null) {
        this.completeMatch(Match.PLAYER_ONE);
      }else if (new_state.current_match.player_one == null) {
        this.completeMatch(Match.PLAYER_TWO);
      }else if (new_state.current_match.player_two == null) {
        this.completeMatch(Match.PLAYER_ONE);
      }else {
        this.setState(new_state)
      }

    }else {

      if (new_state.current_bracket.getRoundCompleted(new_state.current_bracket.current_round - 1)){
        if (new_state.current_bracket.bracketEnded()) {
          new_state.bracket_completed = true;
          new_state.current_match = Match.generateEmptyMatch();
        }else {

          new_state.current_bracket.generateNextRound();
          new_state.current_bracket.nextRound();

          this.getNewMatch();
        }
      }

      this.setState(new_state);


    }



  }

  // Function that completes the match with either player_one or player_two as the winner
  // TODO
  completeMatch(winner) {

    var current_match = this.state.current_match;

    current_match.setWinner(winner);

    var current_bracket = this.state.current_bracket;

    var new_state = this.state;

    current_bracket.rounds_list[current_bracket.current_round - 1][current_match.match_index] = current_match;

    new_state.current_bracket = current_bracket;

    this.setState(new_state);
    this.getNewMatch()

  }

  render() {

    if (this.state.bracket_completed) {
      return (
        <div className = "container-fluid">
          <h1>Game Completed</h1>
          <h2>Winner {this.state.current_bracket.getBracketWinner()}</h2>
        </div>
      )
    }

    if (this.state.current_bracket != undefined) {
      return (
        <div className = "container-fluid">
          <br/>
          <h2>Round {this.state.current_bracket.current_round}</h2>
          <h1 className = "match-title">{this.state.current_match.player_one} V {this.state.current_match.player_two}</h1>

          <div className = "choice-buttons row">
            <div className = "col btn-option">
              <button onClick = {this.completeMatch.bind(this, Match.PLAYER_ONE)} className = "btn btn-block btn-primary">
                <img className = "btn-arrow" width = "50" height = "50" src = "/assets/images/arrow-left.svg"/>
              </button>

            </div>
            <div className = "col btn-option">
              <button onClick = {this.completeMatch.bind(this, Match.PLAYER_TWO)} className = "btn btn-block btn-primary">
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
