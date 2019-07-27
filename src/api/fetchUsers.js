import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions";

export function createFetchUsers(username) {
  const url = `${process.env.REACT_APP_API_BASE}search/users?q=${username}+repos:>5`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_USERS,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: {
          data
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: {
          error
        }
      });
    }
  };
}
