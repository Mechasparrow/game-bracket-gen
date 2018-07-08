import {connect} from 'react-redux';
import {updatePlayerNumber, generateEmptyTeams, updatePlayerByIdx} from '../actions';

import AddTeams from '../components/add-teams/add-teams';

const mapStateToProps = state => ({
  player_count: state.player_amnt,
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  genEmptyTeams: (count) => {
    dispatch(generateEmptyTeams(count))
  },
  updateTeamByIdx: (idx, team) =>{
    dispatch(updatePlayerByIdx(idx, team))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeams);
