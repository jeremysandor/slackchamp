/*
 * AppReducer
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
  LOAD_SESSION,
  LOAD_SESSION_SUCCESS,
  LOAD_GAMES,
  LOAD_GAMES_SUCCESS,
  LOAD_GAMES_ERROR,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  games: false,
  session: false,
});

function appReducer(state = initialState, action) {
  console.log('appReducer', action)
  switch (action.type) {
    case LOAD_SESSION:
      return state
        .set('error', false)
        .set('session', false);
    case LOAD_SESSION_SUCCESS:
      return state
        .set('session', action.session);
    case LOAD_GAMES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('games', false);
    case LOAD_GAMES_SUCCESS:
      return state
        .set('games', action.games)
        .set('loading', false);
    case LOAD_GAMES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
