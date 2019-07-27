export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const FETCH_REPO = "FETCH_REPO";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";
export const FETCH_REPO_FAILED = "FETCH_REPO_FAILED";

export const CLEAR_DATA = "CLEAR_DATA";
export function clearData() {
  return function(dispatch) {
    dispatch({
      type: CLEAR_DATA
    });
  };
}
