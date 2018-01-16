import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/organisms/NavigationBar'
import {LandingPage} from './components';
import Form from './components/organisms/Form'
import UsersContainer from './containers/UsersContainer'
import {Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/users' exact component={UsersContainer} />
          <Route path='/users/new' exact component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;

