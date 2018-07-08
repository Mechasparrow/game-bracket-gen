import React, { Component } from 'react';
import './New-Bracket.css';

import Bracket from '../../lib/bracket.js';

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

    this.renderFormValidation = this.renderFormValidation.bind(this);
    this.validPlayerCount = this.validPlayerCount.bind(this);
    this.nextSection = this.nextSection.bind(this);

    this.renderNextArea = this.renderNextArea.bind(this);

    console.log(props);

  }

  updatePlayerCount (e) {
    var value = e.target.value;

    var player_count = parseInt(value) || 0;

    this.props.updatePlayerCount(player_count);

  }

  renderFormValidation() {

      var valid_count = this.validPlayerCount();

      if (valid_count) {
	  return (
	      <div className = "alert alert-success" role = "alert">
		  Ready to Generate Bracket!
	      </div>
	  )
      }else if (valid_count !== true) {
	  return (
		  <div className = "alert alert-danger" role="alert">
		    Not enough Players or Teams!
	          </div>
	  )
      }

  }

  validPlayerCount() {
      var player_count = this.props.player_count

      return (player_count > 1);
  }

  nextSection () {

    var new_state = this.state;

    new_state.nextSection = this.validPlayerCount();

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
            }
          }}/>
      )
    }

  }

  render() {
    return (
      <div className="new-bracket container-fluid">
        <h1>New Bracket</h1>


	{this.renderFormValidation()}

        <PlayerCountInput updatePlayerCount = {this.updatePlayerCount}></PlayerCountInput>
        <h2>Player Count {this.props.player_count}</h2>

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
