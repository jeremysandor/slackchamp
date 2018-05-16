import { createSelector } from 'reselect';

/**
 * Direct selector to the forgotPasswordSubmit state domain
 */
const selectForgotPasswordSubmitDomain = (state) => state.get('forgotPasswordSubmit');

/**
 * Other specific selectors
 */
const makeSelectCode = () => createSelector(
  selectForgotPasswordSubmitDomain,
  (substate) => substate.get('code')
);

const makeSelectPassword = () => createSelector(
  selectForgotPasswordSubmitDomain,
  (substate) => substate.get('password')
);

/**
 * Default selector used by ForgotPasswordSubmit
 */

const makeSelectForgotPasswordSubmit = () => createSelector(
  selectForgotPasswordSubmitDomain,
  (substate) => substate.toJS()
);


export {
  selectForgotPasswordSubmitDomain,
  makeSelectForgotPasswordSubmit,
  makeSelectCode,
  makeSelectPassword,
};
