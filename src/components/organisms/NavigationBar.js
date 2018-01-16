import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/actionCreators';

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const userLinks = (
      <ul>
      	<li><Link to='/users'>See Users</Link></li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users/new'>Add a user</Link></li>
        </ul>
    );

    return (
        <nav>
	        <div>
	          {this.props.auth ? userLinks : guestLinks}
	        </div>
        </nav>
    );
  }
}


function mapStateToProps(reduxState) {
  return {
    auth: reduxState.loggedInUser.isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
