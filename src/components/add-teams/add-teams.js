import React, { Component } from 'react';
import './add-teams.css';

import Bracket from '../../lib/bracket.js';

// Import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

class PlayerInput extends Component {

  constructor(props) {
      super(props);

  }

  render() {
    return (
        <div className = "player-input">
            <input className = "form-control" onChange = {this.props.updatePlayerValue.bind(this, this.props.index)}/>
        </div>
    );
  }


}

class AddTeams extends Component {

  constructor(props) {
    super(props);

    this.generateEmptyPlayerList = this.generateEmptyPlayerList.bind(this);

    var player_count;

    try {
        player_count = this.props.player_count;
    }catch (err) {
        player_count = 0;
        console.log(err);
    }

    this.state = {
      player_count: player_count,
      players: [],
      back: false,
      bracket: null
    };

    var updatedState = this.state;
    updatedState.players = this.generateEmptyPlayerList(this.state.player_count);


    //Function declarations
    this.setState(updatedState);

    this.updatePlayerValue = this.updatePlayerValue.bind(this);


    //Bracket gen and submission
    this.generateBracket = this.generateBracket.bind(this);
    this.redirectToMatchView = this.redirectToMatchView.bind(this);

    this.goBack = this.goBack.bind(this);
    this.backRedirect = this.backRedirect.bind(this);

    this.renderInputsValidation = this.renderInputsValidation.bind(this);
    this.validatePlayerInputs = this.validatePlayerInputs.bind(this);

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

  updatePlayerValue(index, e) {
      var player_name = e.target.value;

      var player_list = this.state.players;

      var player_index = index;

      var new_state = this.state;

      player_list[player_index] = player_name;

      new_state.players = player_list;

      this.setState(new_state);
  }

  generateEmptyPlayerList(length) {

    var player_list = [];

    for (var i = 0; i < length; i ++) {
        player_list.push(
                ""
        );
    }

    return player_list;

  }

  generatePlayerInputs() {

      var player_list_length = this.state.players.length;

      var player_inputs = [];

      for (var i = 0; i < player_list_length; i ++) {
          player_inputs.push ( <PlayerInput key = {i} index = {i} updatePlayerValue = {this.updatePlayerValue}>
                   </PlayerInput> );
      }

      return player_inputs;
  }

  validatePlayerInputs() {

      var player_inputs_valid = true;

      var players = this.state.players;

      players.map(function (player) {
	  if (player != "") {
	      //Keep going
	  }else {
	      player_inputs_valid = false
	  }
      });

      return player_inputs_valid;

  }

  renderInputsValidation() {

      var valid_inputs = this.validatePlayerInputs();

      if (valid_inputs) {
	  return (<div className = "alert alert-success">Valid Inputs</div>);
      }else {
	  return (<div className = "alert alert-danger">Invalid Inputs</div>);
      }

  }

  generateBracket() {
      var players = this.state.players;

      var starting_bracket = new Bracket(players);

      var the_new_state = this.state;

      the_new_state.bracket = starting_bracket;

      this.setState(the_new_state);

  }

  redirectToMatchView() {
    var the_state = this.state;

    if (the_state.bracket !== null) {
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
