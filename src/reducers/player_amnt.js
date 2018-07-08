import {
  UPDATE_PLAYER_NUMBER,
  NEW_GAME
} from '../constants';

export const player_amnt = (state = 0, action) => {

  switch (action.type) {
    case UPDATE_PLAYER_NUMBER:
      return action.number;
    case NEW_GAME:
      return 0;
    default:
      return state;
  }

};
