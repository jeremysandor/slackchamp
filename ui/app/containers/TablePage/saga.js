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
import { makeSelectHomeTeam } from './selectors';
import { makeSelectLine } from './selectors';
import { makeSelectSide } from './selectors';
import { makeSelectTotal } from './selectors';
import { makeSelectDate } from './selectors';

/**
 * Games request/response handler
 */
export function* getGames() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const awayteam = yield select(makeSelectAwayTeam());
  const hometeam = yield select(makeSelectHomeTeam());
  const line = yield select(makeSelectLine());
  const side = yield select(makeSelectSide());
  const total = yield select(makeSelectTotal());
  const date = yield select(makeSelectDate());

  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = 'http://localhost:3001/api/games';
  // const requestURL = 'http://web:3001/api/games';

  try {
    const opts = {
      method: 'POST',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      },
      body: JSON.stringify({
        roadteam: awayteam,
        hometeam: hometeam,
        line: line,
        side: side,
        total: total,
        date: date
      })
    }

    console.log('OPTS', opts);

    // Call our request helper (see 'utils/request')
    const games = yield call(request, requestURL, opts);
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
