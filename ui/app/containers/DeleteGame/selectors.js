import { createSelector } from 'reselect';

/**
 * Direct selector to the deleteGame state domain
 */
const selectDeleteGameDomain = (state) => state.get('deleteGame');

/**
 * Other specific selectors
 */

const makeSelectGameId = () => createSelector(
  selectDeleteGameDomain,
  (gameState) => gameState.get('gameId')
);


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
  makeSelectGameId,
};
