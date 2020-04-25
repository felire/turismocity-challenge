import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { onSuccessPagination } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  images: [],
  imagesNextPage: 1,
  imagesTotalPages: 1,
  imagesTotal: 0,
  currentImage: null
};

export const initialState = completeState(stateDescription, [
  'imagesNextPage',
  'imagesTotalPages',
  'imagesTotal'
]);

const reducerDescription = {
  primaryActions: [actions.GET_IMAGES, actions.GET_IMAGE],
  override: {
    [actions.GET_IMAGES_SUCCESS]: onSuccessPagination
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
