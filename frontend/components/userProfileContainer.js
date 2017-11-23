import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, /*requestPosts*/ } from '../all_actions'; //grab post's comments via assoc.
// import { friendUser, unfriendUser } from '../all_actions';
import UserProfile from './userProfile';

const mapStateToProps = ({ session, entities }, ownProps) => {
  return ({
    currentUser: session.currentUserId,
    users: entities.users,
    currentPage: ownProps.match.params.id
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
