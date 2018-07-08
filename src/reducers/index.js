import {combineReducers} from 'redux';

import {player_amnt} from './player_amnt';
import {teams} from './teams';
import {bracket} from './bracket';
import {match} from './match';
import {match_completed} from './match_completed';

export const rootReducer = combineReducers({
  player_amnt,
  teams,
  bracket,
  current_match: match,
  match_completed
})
