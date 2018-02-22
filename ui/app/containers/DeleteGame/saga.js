import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { DELETE_ACTION } from './constants'
import { deleteAction } from './actions';
import { gamesLoaded, gameLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import { makeSelectGameId } from './selectors';


export function* remove() {
  const gameId = yield select(makeSelectGameId());
  console.log('remove gameId', gameId);

  let requestURL = `http://localhost:3001/api/games/${gameId}`;
  if (process.env.NODE_ENV === 'production') {
    requestURL = `http://ec2-13-57-176-254.us-west-1.compute.amazonaws.com:3001/api/games/${gameId}`;
  }

  try {
    const opts = {
      method: 'DELETE',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      }
    }

    console.log('OPTS', opts);

    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, opts);
    console.log('response', response);
    yield put(gamesLoaded(response));
  } catch (err) {
    yield put(gameLoadingError(err));
  }

}


export default function* deleteGame() {
  yield takeLatest(DELETE_ACTION, remove)
}
