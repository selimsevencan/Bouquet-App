import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  CLEAR_DATA
} from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA: {
      return {
        ...initialState
      };
    }
    case FETCH_USERS: {
      return {
        ...state,
        loading: true
      };
    }

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    }

    case FETCH_USERS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}
