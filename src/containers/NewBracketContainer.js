import {connect} from 'react-redux';
import {updatePlayerNumber} from '../actions';

import NewBracket from '../components/new-bracket/New-Bracket';





const mapStateToProps = state => ({
  player_count: state.player_amnt
})

const mapDispatchToProps = dispatch => ({
  updatePlayerCount: count => dispatch(updatePlayerNumber(count))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBracket)
