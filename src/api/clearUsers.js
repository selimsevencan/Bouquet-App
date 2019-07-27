
import {
    CLEAR_USERS,
  } from '../actions';
  
export function clearUsers() {
    return function (dispatch) {
      dispatch({
        type: CLEAR_USERS,
        payload: {
            data: [],
            userData: {},
        },
      });
  
    }
  }
  