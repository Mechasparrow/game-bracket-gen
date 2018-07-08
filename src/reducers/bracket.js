import {GENERATE_BRACKET} from '../constants';

import Bracket from '../lib/bracket';

import _ from 'lodash';

export const bracket = (state = null, action) => {

  switch (action.type) {
    case GENERATE_BRACKET:
      var teams = _.values(action.teams);

      var bracket = new Bracket(teams);

      return bracket;

    default:
      return state;
  }

};
