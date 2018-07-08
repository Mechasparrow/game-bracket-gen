import {connect} from 'react-redux';

import MatchView from '../components/match-view/match-view';

import {
  getCurrentMatch,
  setCurrentMatchWinner,
  completeCurrentMatch,
  triggerNewRound
} from '../actions';



const mapStateToProps = state => ({
  bracket: state.bracket,
  current_match: state.current_match,
  current_match_completed: state.match_completed
})

const mapDispatchToProps = dispatch => ({
  getCurrentMatch: (bracket) => {
    dispatch(getCurrentMatch(bracket))
  },
  setCurrentMatchWinner: (winner, callback) => {
    dispatch(setCurrentMatchWinner(winner))
  },
  completeCurrentMatch: (match, match_idx) => {
    dispatch(completeCurrentMatch(match, match_idx))
  },
  newRound: () => {
    dispatch(triggerNewRound());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchView);
