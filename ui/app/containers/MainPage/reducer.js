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
  CHANGE_AWAYTEAM,
  CHANGE_HOMETEAM,
  CHANGE_LINE,
  CHANGE_SIDE,
  CHANGE_TOTAL,
  CHANGE_DATE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  awayTeam: '',
  homeTeam: '',
  line: '',
  side: '',
  total: '',
  date: '',
});

function tableReducer(state = initialState, action) {
  console.log('ACTION type', action);
  console.log('STATE', state);
  switch (action.type) {
    case CHANGE_AWAYTEAM:
      console.log('in here');
      return state
        .set('awayTeam', action.team);
    case CHANGE_HOMETEAM:
      console.log('in here');
      return state
        .set('homeTeam', action.team);
    case CHANGE_LINE:
      console.log('in here');
      return state
        .set('line', action.line);          
    case CHANGE_SIDE:
      console.log('in here');
      return state
        .set('side', action.side);
    case CHANGE_TOTAL:
      console.log('in here');
      return state
        .set('total', action.total);
    case CHANGE_DATE:
      console.log('in here');
      return state
        .set('date', action.date);        
    default:
      return state;
  }
}

export default tableReducer;
