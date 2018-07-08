import {
  GET_CURRENT_MATCH,
  SET_CURRENT_MATCH_WINNER,
  NEW_GAME
} from '../constants';

import Match from '../lib/match';

import _ from 'lodash';

export const match = (state = Match.generateEmptyMatch(), action) => {

  switch (action.type) {
    case GET_CURRENT_MATCH:
      var bracket = action.bracket;
      return bracket.getUncompletedMatchFromCurrentRound();
    case SET_CURRENT_MATCH_WINNER:
      var match = Object.assign(Object.create(Object.getPrototypeOf(state)), state);
      var winner = action.winner;
      match.setWinner(winner);
      return match;
    case NEW_GAME:
        return Match.generateEmptyMatch();
    default:
      return state;
  }

};
