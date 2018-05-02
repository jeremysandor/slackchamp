/**
 * Gets the repositories of the user from Github
 */
// import config from '../../../config';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GAMES, LOAD_GAMES_ON_RENDER } from 'containers/App/constants';
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
export function* createGames() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const awayteam = yield select(makeSelectAwayTeam());
  const hometeam = yield select(makeSelectHomeTeam());
  const line = yield select(makeSelectLine());
  const side = yield select(makeSelectSide());
  const total = yield select(makeSelectTotal());
  const date = yield select(makeSelectDate());

  let requestURL = 'http://localhost:3001/api/games';
  if (process.env.NODE_ENV === 'production') {
    // requestURL = 'http://ec2-13-57-176-254.us-west-1.compute.amazonaws.com:3001/api/games';
    requestURL = 'http://web:3001/api/games';
  }
  console.log('createGames requestURL', requestURL);
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

    console.log('GAME OPTS', opts);

    // Call our request helper (see 'utils/request')
    const games = yield call(request, requestURL, opts);
    console.log('games', games);
    yield put(gamesLoaded(games));
  } catch (err) {
    yield put(gameLoadingError(err));
  }
}


export function* getGames() {
  // let requestURL = 'http://localhost:3001/api/games';
  // if (process.env.NODE_ENV === 'production') {
  //   // requestURL = 'http://ec2-13-57-176-254.us-west-1.compute.amazonaws.com:3001/api/games';
  //   requestURL = 'http://web:3001/api/games';
  // }
  let requestURL = `http://${process.env.WEB_SERVICE_HOST}:${process.env.WEB_SERVICE_PORT}/api/games`

  console.log('ENV', process.env);
  console.log('getGames requestURL', requestURL);

  try {
    const opts = {
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      }
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
  // Watches for LOAD_GAMES actions and calls createGames when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GAMES_ON_RENDER, getGames);
  yield takeLatest(LOAD_GAMES, createGames);
}
