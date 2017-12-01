import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers, getPosts } from '../all_actions';
import PostsIndexPage from './postsIndexPage';

const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUserId,
  users: entities.users,
  posts: entities.content.posts,
  comments: entities.content.comments,
  pageLoading: ui.pageLoading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getPosts: () => dispatch(getPosts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndexPage));
