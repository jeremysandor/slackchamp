/*
 *
 * ForgotPasswordSubmit actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_PASSWORD,
  CHANGE_CODE,
  CHANGE_PASSWORD,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitPassword() {
  return {
    type: SUBMIT_PASSWORD,
  }
}

export function changeCode(code) {
  return {
    type: CHANGE_CODE,
    code
  }
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}