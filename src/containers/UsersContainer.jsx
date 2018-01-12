import { connect } from 'react-redux';
import {
  fetchUsersRequest
} from '../store/actions/actionCreators';
import UserList from '../components/organisms/UserList';

function mapStateToProps(reduxState) {
  // component will now have
  //  props.users from redux state
  return {
    users: reduxState.users.users,
    loading: reduxState.users.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function() {
      return dispatch(fetchUsersRequest());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);