import { createSelector } from 'reselect';

/**
 * Direct selector to the forgotPassword state domain
 */
const selectForgotPasswordDomain = (state) => state.get('forgotPassword');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgotPassword
 */

const makeSelectForgotPassword = () => createSelector(
  selectForgotPasswordDomain,
  (substate) => substate.toJS()
);

const makeSelectEmail = () => createSelector(
  selectForgotPasswordDomain,
  (substate) => substate.get('email')
);

export {
  makeSelectForgotPassword,
  selectForgotPasswordDomain,
  makeSelectEmail
};
