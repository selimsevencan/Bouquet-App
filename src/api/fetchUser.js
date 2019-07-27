import { userApi } from '../config.js';

import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
  } from '../actions';
  
export function createFetchUser(username) {
    const url =`${userApi}${username}`;
    
    return function (dispatch) {
      dispatch({
        type: FETCH_USER,
        payload: {},
      });
  
      fetch(url)
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: FETCH_USER_SUCCESS,
            payload: {
              userData: response
            }
          })
        })
        .catch(error => {
          dispatch({
            type: FETCH_USER_FAILED,
            payload: {
              error
            }
          })
        })
    }
  }
  