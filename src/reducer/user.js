import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  CLEAR_DATA
} from "../actions";

const initialState = {
  userData: {},
  userLoading: false,
  error: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA: {
      return {
        ...initialState
      };
    }
    case FETCH_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        userData: action.payload.userData,
        userLoading: false
      };
    }

    case FETCH_USER_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        userLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
