import { createSelector } from 'reselect';

/**
 * Direct selector to the deleteGame state domain
 */
const selectDeleteGameDomain = (state) => state.get('deleteGame');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DeleteGame
 */

const makeSelectDeleteGame = () => createSelector(
  selectDeleteGameDomain,
  (substate) => substate.toJS()
);

export default makeSelectDeleteGame;
export {
  selectDeleteGameDomain,
};
