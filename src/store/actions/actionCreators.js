import * as t from './constants';
import { getUsers } from '../../services/api'

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
