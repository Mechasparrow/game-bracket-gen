import {
  GENERATE_BRACKET,
  COMPLETE_CURRENT_MATCH,
  TRIGGER_NEW_ROUND,
  NEW_GAME
} from '../constants';

import Bracket from '../lib/bracket';

import _ from 'lodash';

export const bracket = (state = null, action) => {

  switch (action.type) {
    case GENERATE_BRACKET:
      var teams = _.values(action.teams);

      var bracket = new Bracket(teams);

      return bracket;

    case COMPLETE_CURRENT_MATCH:

      var updated_bracket = Object.assign(Object.create(Object.getPrototypeOf(state)), state);

      var {match, idx} = action;

      updated_bracket.rounds_list[updated_bracket.current_round - 1][idx] = match;

      return updated_bracket;

    case TRIGGER_NEW_ROUND:

      var updated_bracket = Object.assign(Object.create(Object.getPrototypeOf(state)), state);

      updated_bracket.generateNextRound();
      updated_bracket.nextRound();

      return updated_bracket;

    case NEW_GAME:
      return null;
    default:
      return state;
  }

};
