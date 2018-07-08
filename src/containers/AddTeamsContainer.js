import {connect} from 'react-redux';
import {
  updatePlayerNumber,
  generateEmptyTeams,
  updatePlayerByIdx,
  generateBracket
} from '../actions';

import AddTeams from '../components/add-teams/add-teams';

const mapStateToProps = state => ({
  player_count: state.player_amnt,
  teams: state.teams,
  bracket: state.bracket
})

const mapDispatchToProps = dispatch => ({
  genEmptyTeams: (count) => {
    dispatch(generateEmptyTeams(count))
  },
  updateTeamByIdx: (idx, team) =>{
    dispatch(updatePlayerByIdx(idx, team))
  },
  genBracket: (teams) => {
    dispatch(generateBracket(teams))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeams);
