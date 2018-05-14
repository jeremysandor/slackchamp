/*
 *
 * Signup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from './constants';

const initialState = fromJS({});

function signupReducer(state = initialState, action) {
  console.log('ACTION type', action);
  console.log('STATE', state);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    default:
      return state;
  }
}

export default signupReducer;
