/**
 * Table selectors
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

const makeSelectHomeTeam = () => createSelector(
  selectHome,
  (homeState) => homeState.get('homeTeam')
);

const makeSelectLine = () => createSelector(
  selectHome,
  (homeState) => homeState.get('line')
);

const makeSelectSide = () => createSelector(
  selectHome,
  (homeState) => homeState.get('side')
);

const makeSelectTotal = () => createSelector(
  selectHome,
  (homeState) => homeState.get('total')
);

const makeSelectDate = () => createSelector(
  selectHome,
  (homeState) => homeState.get('date')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectAwayTeam,
  makeSelectHomeTeam,
  makeSelectLine,
  makeSelectSide,
  makeSelectTotal,
  makeSelectDate,
};
