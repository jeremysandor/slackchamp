import { createSelector } from 'reselect';

/**
 * Direct selector to the signup state domain
 */
const selectSignupDomain = (state) => state.get('signup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Signup
 */

const makeSelectSignup = () => createSelector(
  selectSignupDomain,
  (substate) => substate.toJS()
);

const makeSelectEmail = () => createSelector(
  selectSignupDomain,
  (substate) => substate.get('email')
);

const makeSelectPassword = () => createSelector(
  selectSignupDomain,
  (substate) => substate.get('password')
);

// export default makeSelectSignup;
export {
  selectSignupDomain,
  makeSelectSignup,
  makeSelectEmail,
  makeSelectPassword
};
