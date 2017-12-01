import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../all_actions';
import UserDetails from './userDetails';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUserId,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));
