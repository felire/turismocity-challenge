export const formatPagination = (response, refresh, handleList) => ({
  list: handleList ? handleList(response.data) : response.data?.data,
  meta: {
    totalPages: response.data?.pageCount,
    currentPage: response.data?.page,
    refresh
  }
});

export const onSuccessPagination = (state, action) =>
  action.payload.list
    ? state.merge({
        [`${action.target}Loading`]: false,
        [`${action.target}Error`]: null,
        [`${action.target}`]: action.payload.meta.refresh
          ? action.payload.list
          : state[action.target].concat(action.payload.list),
        [`${action.target}TotalPages`]: Number(action.payload.meta.totalPages),
        [`${action.target}NextPage`]: Number(action.payload.meta.currentPage) + 1
      })
    : state.merge({
        [`${action.target}Loading`]: false,
        [`${action.target}Error`]: null
      });

export const paginationServicePayload = (state, reducerName, target, refresh) => ({
  totalPages: state[reducerName][`${target}TotalPages`],
  nextPage: state[reducerName][`${target}NextPage`],
  refresh
});
