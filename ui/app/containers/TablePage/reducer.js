/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  CHANGE_AWAYTEAM,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  awayTeam: '',
});

function tableReducer(state = initialState, action) {
  console.log('ACTION type', action);
  console.log('STATE', state);
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case CHANGE_AWAYTEAM:
      console.log('in here');
      return state
        .set('awayTeam', action.team);
    default:
      return state;
  }
}

export default tableReducer;
