import api from "../../api";

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

/**
 * Types
 */

const Types = {
  SEARCH_FETCH: "SEARCH_FETCH",
  SEARCH_FETCH_PENDING: "SEARCH_FETCH_PENDING",
  SEARCH_FETCH_SUCCESS: "SEARCH_FETCH_SUCCESS",
  SEARCH_SET_ERROR: "SEARCH_SET_ERROR",
  SEARCH_SET_DATA: "SEARCH_SET_DATA",
};

/**
 * Actions
 */

export const searchUser = (username) => {
  return (dispatch) => {
    dispatch(fetchPending());
    return api.search
      .searchUser(username)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message || "Error searching users."));
      })
      .finally(() => dispatch(fetchSuccess()));
  };
};

export const searchClear = () => {
  return (dispatch) => {
    dispatch(setData(INITIAL_STATE.data));
  };
};

const setData = (payload) => {
  return {
    type: Types.SEARCH_SET_DATA,
    payload,
  };
};

const setError = (payload) => {
  return {
    type: Types.SEARCH_SET_ERROR,
    payload,
  };
};

const fetchPending = () => {
  return {
    type: Types.SEARCH_FETCH_PENDING,
  };
};

const fetchSuccess = () => {
  return {
    type: Types.SEARCH_FETCH_SUCCESS,
  };
};

/**
 * Reducers
 */

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_SET_DATA:
      return { ...state, data: action.payload };
    case Types.SEARCH_FETCH_PENDING:
      return { ...state, isLoading: true };
    case Types.SEARCH_FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case Types.SEARCH_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default users;
