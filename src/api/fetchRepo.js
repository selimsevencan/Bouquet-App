import { FETCH_REPO, FETCH_REPO_SUCCESS, FETCH_REPO_FAILED } from "../actions";

export function createFetchRepo(username) {
  const url = `${process.env.REACT_APP_API_BASE}users/${username}/repos`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_REPO,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const repo = await response.json();

      dispatch({
        type: FETCH_REPO_SUCCESS,
        payload: {
          repo
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_REPO_FAILED,
        payload: {
          error
        }
      });
    }
  };
}
