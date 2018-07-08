import React, { Component } from 'react';
import './add-teams.css';

import Bracket from '../../lib/bracket.js';
import PlayerInput from './player-input';

import _ from "lodash";

// Import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

class AddTeams extends Component {

  constructor(props) {
    super(props);

    props.genEmptyTeams(props.player_count);

    this.state = {
      back: false,
      bracket_generated: false
    };


    this.redirectToMatchView = this.redirectToMatchView.bind(this);

    this.goBack = this.goBack.bind(this);
    this.backRedirect = this.backRedirect.bind(this);

    this.renderInputsValidation = this.renderInputsValidation.bind(this);
    this.validatePlayerInputs = this.validatePlayerInputs.bind(this);

    this.generatePlayerInputs = this.generatePlayerInputs.bind(this);
    this.generateBracket = this.generateBracket.bind(this);


    if (this.props.player_count <= 0) {
      this.goBack();
    }

  }


  backRedirect() {

      var go_back = this.state.back;

      if (go_back) {

          return (<Redirect push to = {{
                  pathname: '/',
                  state: {
                      from : this.props.location,
                  }
          }}/>);

      }

  }

  goBack() {

      var new_state = this.state;
      new_state.back = true;
      this.setState(new_state);
  }


  generatePlayerInputs() {

      var player_list_length = this.props.player_count

      var player_inputs = [];

      for (var i = 0; i < player_list_length; i ++) {

          var raw_team_value = this.props.teams[i];
          var team_value = (raw_team_value !== undefined) ? raw_team_value : "";

          player_inputs.push ( <PlayerInput key = {i} index = {i} value = {team_value} updatePlayerValue = {this.props.updateTeamByIdx}>
                   </PlayerInput> );
      }

      return player_inputs;
  }

  generateBracket() {

    console.log("generating bracket..");

    var teams = this.props.teams;

    this.props.genBracket(teams);

    var new_state = Object.assign({}, this.state);
    new_state.bracket_generated = true;
    this.setState(new_state);

  }

  validatePlayerInputs() {

    var inputs_valid = true;

    console.log("validating...");

    var teams = _.values(this.props.teams);
    console.log(teams);

    teams.map (function (team) {

      if (team != "") {
        //keep going
      }else {
        inputs_valid = false;
      }
    });

    return inputs_valid;

  }

  renderInputsValidation() {

      var valid_inputs = this.validatePlayerInputs();

      if (valid_inputs) {
	  return (<div className = "alert alert-success">Valid Inputs</div>);
      }else {
	  return (<div className = "alert alert-danger">Invalid Inputs</div>);
      }

  }

  redirectToMatchView() {
    var the_state = this.state;

    if (the_state.bracket_generated === true) {
      return (
        <div className = "bracket-div-redirect">
          <Redirect push to = {{
              pathname: '/match-view',
              state: {
                  from: this.props.location,
                  current_bracket: this.state.bracket
              }
          }}/>
        </div>
      )
    }else {
      return (
        <div className = "bracket-div-redirect"></div>
      )
    }

  }

  render() {
    return (
      <div className = "add-teams container-fluid">

	<br></br>
        <h1>Add {this.state.player_count} Teams or Players</h1>

        <div className = "back-elem">
          <button onClick = {this.goBack} className = "btn btn-block btn-danger">
            Back
          </button>


          {this.backRedirect()}

        </div>

	<br></br>


	{this.renderInputsValidation()}


        <div className = "player-inputs">
            {this.generatePlayerInputs()}
        </div>

	<br></br>
        <button onClick = {this.generateBracket} className = "btn btn-success">
          Submit
        </button>

        {this.redirectToMatchView()}
      </div>
    );
  }

}

export default AddTeams;
