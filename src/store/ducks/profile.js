import api from "../../api";

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: null,
};

/**
 * Types
 */

const Types = {
  PROFILE_FETCH: "PROFILE_FETCH",
  PROFILE_FETCH_PENDING: "PROFILE_FETCH_PENDING",
  PROFILE_FETCH_SUCCESS: "PROFILE_FETCH_SUCCESS",
  PROFILE_SET_ERROR: "PROFILE_SET_ERROR",
  PROFILE_SET_DATA: "PROFILE_SET_DATA",
  PROFILE_CLEAR_DATA: "PROFILE_CLEAR_DATA",
};

/**
 * Actions
 */

export const fetchProfile = (username) => {
  return (dispatch) => {
    dispatch(fetchPending());
    dispatch(setData(INITIAL_STATE.data));
    return api.users
      .getUserDetails(username)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message || "Error fetching user."));
      })
      .finally(() => dispatch(fetchSuccess()));
  };
};

export const clearProfile = () => {
  return (dispatch) => {
    dispatch(clearData());
  };
};

const setData = (payload) => {
  return {
    type: Types.PROFILE_SET_DATA,
    payload,
  };
};

const clearData = () => {
  return {
    type: Types.PROFILE_CLEAR_DATA,
  };
};

const setError = (payload) => {
  return {
    type: Types.PROFILE_SET_ERROR,
    payload,
  };
};

const fetchPending = () => {
  return {
    type: Types.PROFILE_FETCH_PENDING,
  };
};

const fetchSuccess = () => {
  return {
    type: Types.PROFILE_FETCH_SUCCESS,
  };
};

/**
 * Reducers
 */

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PROFILE_CLEAR_DATA:
      return { ...INITIAL_STATE };
    case Types.PROFILE_SET_DATA:
      return { ...state, data: action.payload };
    case Types.PROFILE_FETCH_PENDING:
      return { ...state, isLoading: true };
    case Types.PROFILE_FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case Types.PROFILE_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default profile;
