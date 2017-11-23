import { connect } from 'react-redux';
import { fetchUser } from '../all_actions';
import { signOut } from '../session_actions';
import Nav from './nav';

const mapStateToProps = ({ session, entities }) => {
  return ({
    currentUser: session.currentUserId,
    users: entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
