import { createSelector } from 'reselect';

/**
 * Direct selector to the removeGame state domain
 */
const selectRemoveGameDomain = (state) => state.get('removeGame');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RemoveGame
 */

const makeSelectRemoveGame = () => createSelector(
  selectRemoveGameDomain,
  (substate) => substate.toJS()
);

export default makeSelectRemoveGame;
export {
  selectRemoveGameDomain,
};
