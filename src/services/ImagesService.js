import api from '@config/api';

const IMAGE_EP = '/list';
export const getImages = () => api.get(IMAGE_EP);
