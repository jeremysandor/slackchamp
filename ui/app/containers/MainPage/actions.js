/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  CHANGE_AWAYTEAM,
  CHANGE_HOMETEAM,
  CHANGE_LINE,
  CHANGE_SIDE,
  CHANGE_TOTAL,
  CHANGE_DATE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {team} team The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_AWAYTEAM
 */
export function changeAwayTeam(team) {
  console.log('TEAM', team);
  return {
    type: CHANGE_AWAYTEAM,
    team, 
  };
}

export function changeHomeTeam(team) {
  console.log('TEAM', team);
  return {
    type: CHANGE_HOMETEAM,
    team, 
  };
}

export function changeLine(line) {
  console.log('LINE', line);
  return {
    type: CHANGE_LINE,
    line, 
  };
}

export function changeSide(side) {
  console.log('SIDE', side);
  return {
    type: CHANGE_SIDE,
    side, 
  };
}

export function changeTotal(total) {
  console.log('TOTAL', total);
  return {
    type: CHANGE_TOTAL,
    total, 
  };
}

export function changeDate(date) {
  console.log('DATE', date);
  return {
    type: CHANGE_DATE,
    date, 
  };
}
