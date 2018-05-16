/*
 *
 * ForgotPassword actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_CODE,
  CHANGE_EMAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendCode() {
  return {
    type: SEND_CODE,
  }
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email
  }
}
