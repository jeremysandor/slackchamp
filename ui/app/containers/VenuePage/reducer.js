import { fromJS } from 'immutable';

import {
  FILTER_VENUE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  venues: [{'foo': 'bar'}],
});

function venueReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_VENUE:

      // Delete prefixed '@' from the github username
      return state
        .set('venues', action.venues);
    default:
      return state;
  }
}

export default venueReducer;
