import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { acceptFriendship, rejectFriendship } from '../all_actions';
import { signOut } from '../session_actions';
import Nav from './nav';

const mapStateToProps = ({ session, entities }) => {
  return ({
    currentUser: session.currentUserId,
    users: entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  acceptFriendship: relp => dispatch(acceptFriendship(relp)),
  rejectFriendship: relp => dispatch(rejectFriendship(relp)),
  signOut: () => dispatch(signOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
