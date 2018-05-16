import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import { SUBMIT_PASSWORD } from './constants'
import { makeSelectCode, makeSelectPassword } from './selectors'

// auth
import { Auth } from 'aws-amplify';

export function* forgotPasswordSubmit() {
  const email        = 'jeremy.r.sandor@gmail.com'
  const username     = email;
  const code         = yield select(makeSelectCode());
  const new_password = yield select(makeSelectPassword());
  

  console.log('EMAIL?', email);
  console.log('PW?', new_password);
  console.log('code?', code);
  
  Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));  
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_PASSWORD, forgotPasswordSubmit);
}
