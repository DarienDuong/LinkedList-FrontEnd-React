import * as t from './constants';
import { getUsers, login, setAuthorizationToken } from '../../services/api';
import jwtDecode from 'jwt-decode';

export function fetchUsersRequest() {
	return function(dispatch){
		dispatch({type: t.FETCH_USERS_REQUEST})
		return getUsers('/users')
			.then(result => dispatch(fetchUsersSuccess(result)))
			.catch(err => dispatch(fetchUsersFail(err)))
	}
}

export function fetchUsersSuccess(users) {
  return {
    type: t.FETCH_USERS_SUCCESS,
    users
  }
}

export function fetchUsersFail(error) {
	return {
		type: t.FETCH_USERS_FAIL,
		error
	}
}

export function loginUser(data){
	return function(dispatch){
		return login(data)
			.then(result => {
				const token = result.token;
				console.log(token)
				localStorage.setItem('jwtToken', token);
      			setAuthorizationToken(token);
      			dispatch(setCurrentUser(jwtDecode(token)))
      		})
      		.catch(err => console.log(err))
	}
}

export function logout(){
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
  }
}

export function setCurrentUser(user){
	return {
		type: t.SET_CURRENT_USER,
		user
	}
}


