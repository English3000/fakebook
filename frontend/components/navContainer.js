import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../all_actions';
import { signOut } from '../session_actions';
import Nav from './nav';

const mapStateToProps = ({ entities }) => {
  console.log(entities.users);
  return ({
    users: entities.users
  });
  // currentUser: ownProps.match.params.id
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  signOut: () => dispatch(signOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
