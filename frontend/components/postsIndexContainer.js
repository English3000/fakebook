import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers,
         getPosts, getUserPosts,
         deletePost, deleteComment } from '../all_actions';
import PostsIndex from './postsIndex';

const mapStateToProps = ({ entities, session, errors }) => {
  return {
    currentUser: session.currentUserId,
    users: entities.users,
    posts: entities.content.posts,
    comments: entities.content.comments,
    errors: errors
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getPosts: () => dispatch(getPosts()),
  getUserPosts: user => dispatch(getUserPosts(user)),
  deletePost: id => dispatch(deletePost(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));
