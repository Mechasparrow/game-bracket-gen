import {
  COMPLETE_CURRENT_MATCH,
  GET_CURRENT_MATCH,
  NEW_GAME
} from '../constants';

import Match from '../lib/match';

import _ from 'lodash';

export const match_completed = (state = false, action) => {

  switch (action.type) {
    case GET_CURRENT_MATCH:
      return false;
    case COMPLETE_CURRENT_MATCH:
      return true;
    case NEW_GAME:
      return false
    default:
      return state;
  }

};
