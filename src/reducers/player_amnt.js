import {UPDATE_PLAYER_NUMBER} from '../constants';

export const player_amnt = (state = 0, action) => {

  switch (action.type) {
    case UPDATE_PLAYER_NUMBER:
      return action.number;
    default:
      return state;
  }

};
