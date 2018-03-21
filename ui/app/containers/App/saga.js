/**
 * Gets the repositories of the user from Github
 */
// import config from '../../../config';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_SESSION } from './constants';
import { loadSession, sessionLoaded, gameLoadingError } from './actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
import { sessionSelector } from './selectors';

/**
 * Games request/response handler
 */
export function* fetchSession() {
  console.log('FETCH SESSION');

  // let requestURL = 'http://localhost:3001/api/session';
  let requestURL = 'http://localhost/api/session';
  if (process.env.NODE_ENV === 'production') {
    requestURL = 'http://ec2-13-57-176-254.us-west-1.compute.amazonaws.com:3001/api/session';
  }
  console.log('requestURL', requestURL);

  try {
    const opts = {
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      },
      // withCredentials: true
      credentials: 'include'
    }

    console.log('OPTS', opts);

    // Call our request helper (see 'utils/request')
    const session = yield call(request, requestURL, opts);
    console.log('session', session);
    yield put(sessionLoaded(session));
  } catch (err) {
    yield put(gameLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sessionData() {
  // Watches for LOAD_SESSION actions and calls fetchSession when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SESSION, fetchSession);
}
