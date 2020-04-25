import api from '@config/api';

import { getWithPagination } from './UtilPaginationService';

const IMAGE_EP = '/images';
export const getImages = props => getWithPagination(props, IMAGE_EP);
export const getImage = id => api.get(`${IMAGE_EP}/${id}`);
