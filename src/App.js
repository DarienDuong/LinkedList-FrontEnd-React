import React, { Component } from 'react';
import './App.css';
import {LandingPage} from './components';
import Form from './components/organisms/Form'
import UsersContainer from './containers/UsersContainer'
import {Route, Switch, Link, Redirect} from 'react-router-dom';


const Home = () => <h1>This is the home</h1>

class App extends Component {

  render() {
    return (
      <div className="App">
      <ul>
	      			<li>
	      				<Link to='/'>Home</Link>
	      			</li>	      		
	      			<li>
	      				<Link to='/users'>See Users</Link>
	      			</li>
	      			<li>
	      				<Link to='/users/new'>Add a user</Link>
	      			</li>
	      		</ul>
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



// <Grid>
//       		<Row>
// 	      		<ul>
// 	      			<li>
// 	      				<Link to='/'>Home</Link>
// 	      			</li>	      		
// 	      			<li>
// 	      				<Link to='/users'>See Users</Link>
// 	      			</li>
// 	      			<li>
// 	      				<Link to='/users/new'>Add a user</Link>
// 	      			</li>
// 	      		</ul>
//       			<Switch>
// 					<Route path='/' exact component={Home} />
// 					<Route path='/users' exact component={UsersContainer} />
// 					<Route path='/users/new' exact component={Form} />
// 					<Redirect to='/' />
//       			</Switch>
// 			</Row>
// 		</Grid>