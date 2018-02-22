/*
 *
 * DeleteGame actions
 *
 */

import {
  DEFAULT_ACTION,
  DELETE_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function deleteAction(gameId) {
  console.log('deleteAction GAME', gameId);
  return {
    type: DELETE_ACTION,
    gameId
  }
}