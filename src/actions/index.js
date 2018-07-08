import {
  UPDATE_PLAYER_NUMBER,
  ADD_PLAYER_TEAM,
  UPDATE_TEAMS,
  UPDATE_PLAYER_BY_IDX,
  GENERATE_EMPTY_TEAMS,
  GENERATE_BRACKET
} from '../constants';

export const updatePlayerNumber = number => ({
  type: UPDATE_PLAYER_NUMBER,
  number
})

export const addPlayerTeam = team => ({
  type: ADD_PLAYER_TEAM,
  team
})

export const updatePlayerTeams = teams => ({
  type: UPDATE_TEAMS,
  teams
})

export const updatePlayerByIdx = (id, team) => ({
  type: UPDATE_PLAYER_BY_IDX,
  payload: {
    id,
    team
  }
})

export const generateEmptyTeams = (count) => ({
  type: GENERATE_EMPTY_TEAMS,
  count
})

export const generateBracket = (teams) => ({
  type: GENERATE_BRACKET,
  teams
})
