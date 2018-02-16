
import { fromJS } from 'immutable';
import removeGameReducer from '../reducer';

describe('removeGameReducer', () => {
  it('returns the initial state', () => {
    expect(removeGameReducer(undefined, {})).toEqual(fromJS({}));
  });
});
