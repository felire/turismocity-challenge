import api from '@config/api';

export const getWithPagination = ({ totalPages, nextPage, refresh }, endPoint) => {
  if (refresh) return api.get(endPoint);
  if (nextPage <= totalPages) return api.get(`${endPoint}?page=${nextPage}`);
  return Promise.resolve({ ok: true });
};
