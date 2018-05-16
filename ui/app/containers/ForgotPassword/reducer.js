/*
 *
 * ForgotPassword reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_EMAIL,
} from './constants';

const initialState = fromJS({});

function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);      
    default:
      return state;
  }
}

export default forgotPasswordReducer;
