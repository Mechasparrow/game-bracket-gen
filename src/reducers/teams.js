import {ADD_PLAYER_TEAM, UPDATE_TEAMS, UPDATE_PLAYER_BY_IDX, GENERATE_EMPTY_TEAMS} from '../constants';

export const teams = (state = [], action) => {

  let new_state = Object.assign({}, state);

  switch (action.type) {
    case ADD_PLAYER_TEAM:
      new_state.push(action.team);
      return new_state;
    case UPDATE_TEAMS:
      return action.teams;
    case UPDATE_PLAYER_BY_IDX:
      const {id, team} = action.payload;
      new_state[id] = team;
      return new_state;
    case GENERATE_EMPTY_TEAMS:
      let team_arr = [];
      const {count} = action;

      for (var i = 0; i < count; i ++) {
        team_arr.push("");
      }

      return team_arr;
    default:
      return state;
  }

};
