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

    console.log(props);

    var restart = false;

    if (this.props.bracket == null) {
      console.log("nonexistent bracket");
      restart = true;
    }else {
      props.getCurrentMatch(props.bracket);
    }

    this.state = {
      restart: restart
    }

    //Redirects
    this.redirectToGameWon = this.redirectToGameWon.bind(this);
    this.goHomeRedirect = this.goHomeRedirect.bind(this);

    //Complete the match
    this.completeMatch = this.completeMatch.bind(this);
    this.prematureMatchCheck = this.prematureMatchCheck.bind(this);


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

  componentWillReceiveProps(nextProps) {

    if (nextProps.bracket.currentRoundCompleted() == false) {

      if (nextProps.current_match.winner === null) {
          this.prematureMatchCheck(nextProps);
      }

      if (nextProps.current_match.winner !== null && nextProps.current_match_completed === false) {
        nextProps.completeCurrentMatch(nextProps.current_match, nextProps.current_match.match_index);
      }else if (nextProps.current_match_completed === true) {
        nextProps.getCurrentMatch(nextProps.bracket);
      }
    }else {

      if (nextProps.bracket.bracketEnded() === false){
        nextProps.newRound();
      }else {
        alert("Tournament end!");
      }

    }

  }

  prematureMatchCheck(props) {

    var current_match = props.current_match;

    if (current_match.player_one === null && current_match.player_two === null) {
      this.completeMatch(Match.PLAYER_ONE);
    }else if (current_match.player_one == null) {
      this.completeMatch(Match.PLAYER_TWO);
    }else if (current_match.player_two == null) {
      this.completeMatch(Match.PLAYER_ONE);
    }else {
      //Don't do anything
      // Because this will just be handled by the user instead
    }

  }

  completeMatch(winner) {
    this.props.setCurrentMatchWinner(winner);
  }

  redirectToGameWon() {

      return (

	  <Redirect push to = {{
	      pathname: '/game-won',
	      state: {
		        from: this.props.location,
	      }
	  }}/>


      );


  }

  render() {


    if (this.props.bracket != null) {
      if (this.props.bracket.bracketEnded()) {
        return this.redirectToGameWon();
      }
    }


    if (this.props.bracket != null) {
      return (
        <div className = "container-fluid">
          <br/>
          <h2>Round {this.props.bracket.current_round}</h2>

          <h1 className = "match-title">{this.props.current_match.player_one} V {this.props.current_match.player_two}</h1>

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
