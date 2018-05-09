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
        player_count = this.props.location.state.player_count;
    }catch (err) {
        player_count = 0;
        console.log(err);
    }

    this.state = {
      player_count: player_count,
      players: [],
      back: false
    };

    var updatedState = this.state;
    updatedState.players = this.generateEmptyPlayerList(this.state.player_count);


    //Function declarations
    this.setState(updatedState);

    this.updatePlayerValue = this.updatePlayerValue.bind(this);

    this.submitPlayers = this.submitPlayers.bind(this);


   this.goBack = this.goBack.bind(this);
   this.backRedirect = this.backRedirect.bind(this);

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


  //TODO add method to redirect to next state of process
    
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
          player_inputs.push ( <PlayerInput index = {i} updatePlayerValue = {this.updatePlayerValue}>
                   </PlayerInput> );
      }

      return player_inputs;
  }

  submitPlayers() {
      var players = this.state.players;
      //alert(players);

      var starting_bracket = Bracket.generateStartingBracket(players);

      console.log(starting_bracket);

      
  }

  render() {
    return (
      <div className = "add-teams container-fluid">


        <h1>Add Teams</h1>

        
        <div className = "back-elem">
          <button onClick = {this.goBack} className = "btn btn-danger">
            Back
          </button>


          {this.backRedirect()}
          
        </div>
        
        
        <h2>Player Count {this.state.player_count}</h2>

        <hr></hr>

        <div className = "player-inputs">
            {this.generatePlayerInputs()}
        </div>

        <button onClick = {this.submitPlayers} className = "btn btn-success">
          Submit
        </button>
      </div>
    );
  }

}

export default AddTeams;