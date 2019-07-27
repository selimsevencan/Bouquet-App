import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../actions";

export function createFetchUser(username) {
  const url = `${process.env.REACT_APP_API_BASE}users/${username}`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_USER,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const userData = await response.json();

      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: {
          userData
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILED,
        payload: {
          error
        }
      });
    }
  };
}
