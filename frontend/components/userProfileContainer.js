import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers, updateUser/*, friendUser, unfriendUser*/ } from '../all_actions';
import UserProfile from './userProfile';

const mapStateToProps = ({ session, entities }, ownProps) => {
  return ({
    currentUser: session.currentUserId,
    users: entities.users,
    currentPage: ownProps.match.params.id
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
