import { createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  initialLoading: true
};

const reducerDescription = {
  [actions.AUTH_INIT]: (state, action) => state.merge({ initialLoading: false })
};

export default createReducer(Immutable(initialState), reducerDescription);
