import { createSelector } from 'reselect';

/**
 * Direct selector to the signin state domain
 */
const selectSigninDomain = (state) => state.get('signin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Signin
 */

const makeSelectSignin = () => createSelector(
  selectSigninDomain,
  (substate) => substate.toJS()
);

const makeSelectEmail = () => createSelector(
  selectSigninDomain,
  (substate) => substate.get('email')
);

const makeSelectPassword = () => createSelector(
  selectSigninDomain,
  (substate) => substate.get('password')
);

// export default makeSelectSignin;
export {
  selectSigninDomain,
  makeSelectSignin,
  makeSelectEmail,
  makeSelectPassword  
};
