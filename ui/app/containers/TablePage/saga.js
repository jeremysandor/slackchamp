/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GAMES } from 'containers/App/constants';
import { gamesLoaded, gameLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
import { makeSelectUsername } from './selectors';
import { makeSelectAwayTeam } from './selectors';

/**
 * Games request/response handler
 */
export function* getGames() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const awayteam = yield select(makeSelectAwayTeam());

  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = 'http://localhost:3001/api/games';
  // const requestURL = 'http://web:3001/api/games';

  try {
    // Call our request helper (see 'utils/request')
    const games = yield call(request, requestURL);
    console.log('games', games);
    yield put(gamesLoaded(games));
  } catch (err) {
    yield put(gameLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* gameData() {
  // Watches for LOAD_GAMES actions and calls getGames when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GAMES, getGames);
}
