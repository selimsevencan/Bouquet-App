import { api } from '../config.js';

import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
  } from '../actions';
  
export function createFetchUsers(username) {
    const url =`${api}/${username}`;
    return function (dispatch) {
      dispatch({
        type: FETCH_USERS,
        payload: {},
      });
  
      fetch(url)
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: {
              data: response
            }
          })
        })
        .catch(error => {
          dispatch({
            type: FETCH_USERS_FAILED,
            payload: {
              error
            }
          })
        })
    }
  }
  