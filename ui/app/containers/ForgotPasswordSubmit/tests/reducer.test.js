
import { fromJS } from 'immutable';
import forgotPasswordSubmitReducer from '../reducer';

describe('forgotPasswordSubmitReducer', () => {
  it('returns the initial state', () => {
    expect(forgotPasswordSubmitReducer(undefined, {})).toEqual(fromJS({}));
  });
});
