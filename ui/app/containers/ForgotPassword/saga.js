import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import { SEND_CODE } from './constants'
import { makeSelectEmail } from './selectors'

// auth
import { Auth } from 'aws-amplify';

export function* sendCode() {
  const email    = yield select(makeSelectEmail());
  const username = email;

  console.log('EMAIL?', email);
  Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err));  
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SEND_CODE, sendCode);
}
