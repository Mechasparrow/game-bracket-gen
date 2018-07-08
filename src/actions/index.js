import {
  UPDATE_PLAYER_NUMBER,
  ADD_PLAYER_TEAM,
  UPDATE_TEAMS,
  UPDATE_PLAYER_BY_IDX,
  GENERATE_EMPTY_TEAMS,
  GENERATE_BRACKET,
  GET_CURRENT_MATCH,
  COMPLETE_CURRENT_MATCH,
  SET_CURRENT_MATCH_WINNER,
  TRIGGER_NEW_ROUND,
  NEW_GAME
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

export const getCurrentMatch = (bracket) => ({
  type: GET_CURRENT_MATCH,
  bracket
})

export const completeCurrentMatch = (match,idx) => ({
  type: COMPLETE_CURRENT_MATCH,
  match,
  idx
})

export const setCurrentMatchWinner = (winner) => ({
  type: SET_CURRENT_MATCH_WINNER,
  winner
})

export const triggerNewRound = () => ({
  type: TRIGGER_NEW_ROUND
})

export const newGame = () => ({
  type: NEW_GAME
})
