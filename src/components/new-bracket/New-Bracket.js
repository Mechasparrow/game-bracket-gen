import React, { Component } from 'react';
import './New-Bracket.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

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
      player_count: 0,
      nextSection: false
    }

    this.updatePlayerCount = this.updatePlayerCount.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.renderNextArea = this.renderNextArea.bind(this);
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

    var new_state = this.state;

    if (player_count > 0) {
      new_state.nextSection = true
    }else {
      new_state.nextSection = false
    }

    this.setState(new_state);

  }

  renderNextArea() {
    var next_session = this.state.nextSection;

    if (next_session) {
      return (
          <Redirect push to = {{
            pathname: '/add-teams',
            state: {
              from : this.props.location,
              player_count: this.state.player_count
            }
          }}/>
      )
    }

  }

  render() {
    return (
      <div className="new-bracket container-fluid">
        <h1>New Bracket</h1>

        <PlayerCountInput updatePlayerCount = {this.updatePlayerCount}></PlayerCountInput>
        <h2>Player Count {this.state.player_count}</h2>

        <hr></hr>

        <button onClick = {this.nextSection} className = "btn btn-primary">
          Next
        </button>

        {this.renderNextArea()}

      </div>
    );
  }
}

export default NewBracket;
