import React, { Component } from 'react';
import './add-teams.css';

class PlayerInput extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className = "player-input">

        </div>
    )
  }


}

class AddTeams extends Component {

  constructor(props) {
    super(props);

    this.generateEmptyPlayerList = this.generateEmptyPlayerList.bind(this);

    this.state = {
      player_count: this.props.location.state.player_count,
      players: []
    }

    var updatedState = this.state;
    updatedState.players = this.generateEmptyPlayerList(this.state.player_count);

    this.setState(updatedState)

  }

  generateEmptyPlayerList(length) {

    var player_list = [];

    for (var i = 0; i <= length; i ++) {
      player_list.push("");
    }

    return player_list;

  }

  render() {
    return (
      <div className = "add-teams">
        <h1>Add Teams</h1>
        <h2>Player Count {this.state.player_count}</h2>
      </div>
    )
  }

}

export default AddTeams;
