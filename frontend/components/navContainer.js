import { connect } from 'react-redux';
import { signOut } from '../session_actions';
import Nav from './nav';

const mapStateToProps = ({ session, entities }) => {
  return ({
    currentUser: session.currentUserId,
    users: entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
