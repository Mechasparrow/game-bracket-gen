import React, { Component } from 'react';
import './New-Bracket.css';


class PlayerCountInput extends Component {

  constructor(props) {
    super(props);

  }


  render () {

    return (
      <div className = "player-count-input">
        <label># of players</label>
        <input type = "number" className = "form-control" onChange = {this.props.updatePlayerCount}/>
      </div>
    )
  }
}


class NewBracket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player_count: 0
    }

    this.updatePlayerCount = this.updatePlayerCount.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  updatePlayerCount (e) {
    var value = e.target.value;

    var player_count = parseInt(value) || 0;

    var new_state = this.state;
    new_state.player_count = player_count;
    this.setState(new_state);
  }

  nextSection () {

    var player_count = this.state.player_count;

    if (player_count > 0) {
      alert("next sections");
    }else {
      alert("not correct");
    }


  }

  render() {
    return (
      <div className="new-bracket container-fluid">
        <h1>New Bracket</h1>

        <PlayerCountInput updatePlayerCount = {this.updatePlayerCount}></PlayerCountInput>
        <h2>Player Count {this.state.player_count}</h2>

        <hr></hr>

        <button onClick = {this.nextSection} class = "btn btn-primary">
          Next
        </button>

      </div>
    );
  }
}

export default NewBracket;
