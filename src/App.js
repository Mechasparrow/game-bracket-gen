import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import other components
import NewBracket from './new-bracket/New-Bracket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewBracket></NewBracket>
      </div>
    );
  }
}

export default App;
