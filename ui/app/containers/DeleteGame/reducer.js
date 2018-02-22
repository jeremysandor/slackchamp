/*
 *
 * DeleteGame reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DELETE_ACTION,
} from './constants';

const initialState = fromJS({
  gameId: '',
});

function deleteGameReducer(state = initialState, action) {
  console.log('ACTION type***', action);
  console.log('STATE****', state);  
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DELETE_ACTION:

      return state
        .set('gameId', action.gameId);
    default:
      return state;
  }
}

export default deleteGameReducer;
