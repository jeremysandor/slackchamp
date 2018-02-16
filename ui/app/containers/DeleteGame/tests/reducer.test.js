
import { fromJS } from 'immutable';
import deleteGameReducer from '../reducer';

describe('deleteGameReducer', () => {
  it('returns the initial state', () => {
    expect(deleteGameReducer(undefined, {})).toEqual(fromJS({}));
  });
});
