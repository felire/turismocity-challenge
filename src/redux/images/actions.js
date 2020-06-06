import { createTypes, completeTypes } from 'redux-recompose';
import * as ImagesService from '@services/ImagesService';

export const actions = createTypes(completeTypes(['GET_IMAGES']), '@@IMAGES');

const imagesTarget = 'images';

export const actionCreators = {
  getImages: () => ({
    type: actions.GET_IMAGES,
    target: imagesTarget,
    service: ImagesService.getImages
  })
};
