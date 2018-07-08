import {UPDATE_PLAYER_NUMBER, ADD_PLAYER_TEAM, UPDATE_TEAMS, UPDATE_PLAYER_BY_IDX} from '../constants';

export const updatePlayerNumber = number => ({
  type: UPDATE_PLAYER_NUMBER,
  number
})

export const AddPlayerTeam = team => ({
  type: ADD_PLAYER_TEAM,
  team
})

export const UpdatePlayerTeams = teams => ({
  type: UPDATE_TEAMS,
  teams
})

export const UpdatePlayerByIdx = (id, team) => ({
  type: UPDATE_PLAYER_BY_IDX,
  payload: {
    id,
    team
  }
})
