import {combineReducers} from 'redux';

import {player_amnt} from './player_amnt';
import {teams} from './teams';
import {bracket} from './bracket';

export const rootReducer = combineReducers({
  player_amnt,
  teams,
  bracket
})
