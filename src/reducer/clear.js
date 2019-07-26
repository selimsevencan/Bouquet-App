import {
    CLEAR_USERS,
  } from '../actions';
  
  const initialState = {
    data: {},
    loading: false,
    error: null,
  };
  
  
  export default function clear(state = initialState, action) {
    switch (action.type) {
      case CLEAR_USERS: {
        return {
          ...state,
        };
      }

      default: {
        return state;
      }
    }
  }
  