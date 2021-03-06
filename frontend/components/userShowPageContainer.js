import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers, getUserPosts } from '../all_actions';
import UserShowPage from './userShowPage';

const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUserId,
  users: entities.users,
  posts: entities.content.posts,
  comments: entities.content.comments,
  pageLoading: ui.pageLoading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getUserPosts: user => dispatch(getUserPosts(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage));
