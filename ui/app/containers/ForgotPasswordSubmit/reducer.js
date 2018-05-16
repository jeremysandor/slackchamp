/*
 *
 * ForgotPasswordSubmit reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_CODE,
  CHANGE_PASSWORD,  
} from './constants';

const initialState = fromJS({});

function forgotPasswordSubmitReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_CODE:
      return state
        .set('code', action.code);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);      
    default:
      return state;
  }
}

export default forgotPasswordSubmitReducer;
