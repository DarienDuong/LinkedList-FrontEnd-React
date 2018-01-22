import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configure';
import jwtDecode from 'jwt-decode';
import { setCurrentUser} from './store/actions/actionCreators';
import {setAuthorizationToken } from './services/api'

const store = configureStore(); 

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e) {
    store.dispatch(setCurrentUser({}))
  }
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;