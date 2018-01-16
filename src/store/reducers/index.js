import { combineReducers } from 'redux';
import usersReducer from './user';
import loginReducer from './login';

const rootReducer = combineReducers({
  users: usersReducer,
  loggedInUser: loginReducer
});

export default rootReducer;