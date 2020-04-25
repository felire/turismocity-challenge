import { createTypes, completeTypes } from 'redux-recompose';
import * as ImagesService from '@services/ImagesService';
import { formatPagination, paginationServicePayload } from '@utils/reduxUtils';

export const actions = createTypes(completeTypes(['GET_IMAGES', 'GET_IMAGE']), '@@AUTH');

const imagesTarget = 'images';
const currentImage = 'currentImage';

export const actionCreators = {
  getImages: refresh => ({
    type: actions.GET_IMAGES,
    target: imagesTarget,
    service: ImagesService.getImages,
    successSelector: response => formatPagination(response, refresh, data => data?.pictures),
    payload: state => paginationServicePayload(state, 'images', imagesTarget, refresh)
  }),
  getImage: id => ({
    type: actions.GET_IMAGE,
    target: currentImage,
    service: ImagesService.getImage,
    payload: id
  })
};
