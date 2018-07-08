import {connect} from 'react-redux';
import {updatePlayerNumber} from '../actions';

import AddTeams from '../components/add-teams/add-teams';

const mapStateToProps = state => ({
  player_count: state.player_amnt
})

const mapDispatchToProps = dispatch => ({
  //FIXME
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeams);
