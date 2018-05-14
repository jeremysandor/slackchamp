/*
 *
 * Signup actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGN_UP,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signup() {
  return {
    type: SIGN_UP,
  }
}

export function changeEmail(email) {
  console.log('CHANGE_EMAIL action')
  return {
    type: CHANGE_EMAIL,
    email
  }
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}