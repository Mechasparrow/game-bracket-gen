import React, { Component } from 'react';
import './game-won.css';

// Import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

class GameWon extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    goHome: false
	}

	this.startNewBracket = this.startNewBracket.bind(this);
	this.goHomeRedirect = this.goHomeRedirect.bind(this);
	
    }
      
    goHomeRedirect() {
      return (
          <Redirect push to = {{
            pathname: '/',
            state: {
              from: this.props.location
            }
          }}/>
      );
    }

    startNewBracket() {

	var new_state = this.state;
	new_state.goHome = true;

	this.setState(new_state);

	console.log("GoHome!");
	
    }
    
    renderEndScreen() {
      //Renders the end screen

      return (
          <div className = "end-screen">
	    <h1>{this.props.location.state.winner_name} has won the match!</h1>
	    <button onClick = {this.startNewBracket} className = "btn btn-primary">New Bracket</button>
	  </div>
      )

    }

    render() {

      if (this.state.goHome == true) {
        return this.goHomeRedirect();
      }else {
        return this.renderEndScreen();
      }

	
    }


}



export default GameWon
