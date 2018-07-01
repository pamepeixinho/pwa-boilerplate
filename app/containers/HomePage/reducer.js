import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  SEARCH_TEST,
} from './constants';

export const initialState = fromJS({
  loaded: false,
  error: false,
});

const handleSearchTest = (state, action) =>
  handle(state, action, {
    start: (prevState) => {
      debugger;
      return prevState.merge({ loaded: false });
    },
    finished: (prevState) => {
      debugger;
      return prevState.merge({ loaded: true });
    },
    success: (prevState) => prevState.merge({ error: false }),
    failure: (prevState) => prevState.merge({ error: true }),
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEST:
      return handleSearchTest(state, action);
    default:
      return state;
  }
};

export default reducer;
