import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers, updateUser,
         requestFriendship, acceptFriendship, rejectFriendship } from '../all_actions';
import UserProfile from './userProfile';

const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUserId,
  users: entities.users,
  pageLoading: ui.pageLoading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  updateUser: user => dispatch(updateUser(user)),
  requestFriendship: (requesterId, receiverId) => dispatch(requestFriendship(requesterId, receiverId)),
  acceptFriendship: (requesterId, receiverId) => dispatch(acceptFriendship(requesterId, receiverId)),
  rejectFriendship: id => dispatch(rejectFriendship(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
