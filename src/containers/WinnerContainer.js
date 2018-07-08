import {connect} from 'react-redux';

import GameWon from '../components/game-won/game-won';

import {newGame} from '../actions';

const mapStateToProps = state => ({
  bracket: state.bracket
})

const mapDispatchToProps = dispatch => ({
  newGame: () => {
    dispatch(newGame());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameWon);
