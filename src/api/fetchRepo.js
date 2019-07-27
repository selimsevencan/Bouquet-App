import { userApi } from '../config.js';

import {
    FETCH_REPO,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAILED,
  } from '../actions';
  
export function createFetchRepo(username) {
    const url =`${userApi}${username}/repos`;
    
    return function (dispatch) {
      dispatch({
        type: FETCH_REPO,
        payload: {},
      });
  
      fetch(url)
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: FETCH_REPO_SUCCESS,
            payload: {
              repo: response
            }
          })
        })
        .catch(error => {
          dispatch({
            type: FETCH_REPO_FAILED,
            payload: {
              error
            }
          })
        })
    }
  }
  