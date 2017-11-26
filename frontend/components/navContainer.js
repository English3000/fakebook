import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
