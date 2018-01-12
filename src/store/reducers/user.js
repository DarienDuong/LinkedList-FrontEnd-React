import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from '../actions/constants'

const DEFAULT_STATE = {
  users: [],
  loading: true
};

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {...state, loading: true}
    }
    case FETCH_USERS_SUCCESS: {
      return {...state, users: action.users, loading: false}
    }
    default:
      return { ...state };
  }
};

export default usersReducer;