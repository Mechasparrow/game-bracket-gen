import React, { Component } from 'react';

class PlayerInput extends Component {

  constructor(props) {
      super(props);

      this.playerInputChange = this.playerInputChange.bind(this);

  }

  playerInputChange(e) {
    const input_value = e.target.value;
    const idx = this.props.index;

    this.props.updatePlayerValue(idx, input_value);

  }


  render() {
    return (
        <div className = "player-input">
            <input className = "form-control" value = {this.props.value} onChange = {this.playerInputChange.bind(this)}/>
        </div>
    );
  }

}

export default PlayerInput;
