/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectAwayTeam = () => createSelector(
  selectHome,
  (homeState) => homeState.get('awayTeam')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectAwayTeam,
};
