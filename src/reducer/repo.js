import {
  FETCH_REPO,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILED
} from "../actions/fetchRepo";
import { CLEAR_DATA } from "../actions/clearData";
const initialState = {
  repo: [],
  repoLoading: false,
  error: null
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA: {
      return {
        ...initialState
      };
    }
    case FETCH_REPO: {
      return {
        ...state,
        repoLoading: true
      };
    }

    case FETCH_REPO_SUCCESS: {
      return {
        ...state,
        repo: action.payload.repo,
        repoLoading: false
      };
    }

    case FETCH_REPO_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        repoLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
