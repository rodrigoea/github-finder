import api from "../../api";

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
  pagination: { page: 1, since: 0, ids: [] },
};

/**
 * Types
 */

const Types = {
  USERS_FETCH: "USERS_FETCH",
  USERS_FETCH_PENDING: "USERS_FETCH_PENDING",
  USERS_FETCH_SUCCESS: "USERS_FETCH_SUCCESS",
  USERS_SET_ERROR: "USERS_SET_ERROR",
  USERS_SET_DATA: "USERS_SET_DATA",
  USERS_SET_PAGINATION_DATA: "USERS_SET_PAGINATION_DATA",
};

/**
 * Actions
 */

export const fetchUsers = (since = INITIAL_STATE.pagination.since) => {
  return (dispatch) => {
    dispatch(fetchPending());
    return api.users
      .getUsers(since)
      .then((response) => {
        const { data } = response;
        const ids = { prev: data[0].id, last: data[data.length - 1].id };

        dispatch(setData(data));
        dispatch(setPaginationData({ ids, since }));
      })
      .catch((error) => {
        dispatch(setError(error.message || "Error fetching users."));
      })
      .finally(() => dispatch(fetchSuccess()));
  };
};

const setData = (payload) => {
  return {
    type: Types.USERS_SET_DATA,
    payload,
  };
};

const setPaginationData = (payload) => {
  return {
    type: Types.USERS_SET_PAGINATION_DATA,
    payload,
  };
};

const setError = (payload) => {
  return {
    type: Types.USERS_SET_ERROR,
    payload,
  };
};

const fetchPending = () => {
  return {
    type: Types.USERS_FETCH_PENDING,
  };
};

const fetchSuccess = () => {
  return {
    type: Types.USERS_FETCH_SUCCESS,
  };
};

/**
 * Reducers
 */

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.USERS_SET_DATA:
      return { ...state, data: action.payload };
    case Types.USERS_SET_PAGINATION_DATA: {
      const {
        payload: { since, ids },
      } = action;
      const { page, ids: currentIds, since: currentSince } = state.pagination;

      let newPage;
      let newIds = [];

      /**
       * since === 0 means the user is in the first page or going to the first page
       * Otherwise, get the current page
       */
      if (since === 0) {
        newPage = 1;
      } else {
        newPage = since < currentSince ? page - 1 : page + 1;
      }

      newIds = [...currentIds];
      newIds.push(ids);

      if (newPage < page) {
        newIds = newIds.slice(0, newPage);
      }

      const pagination = {
        page: newPage,
        ids: newIds,
        since,
      };

      return { ...state, pagination };
    }
    case Types.USERS_FETCH_PENDING:
      return { ...state, isLoading: true };
    case Types.USERS_FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case Types.USERS_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default users;
