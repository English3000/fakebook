import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers, getPosts, getUserPosts,
         deletePost, getPostComments, deleteComment } from '../all_actions';
import PostsIndex from './postsIndex';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: session.currentUserId,
    users: entities.users,
    posts: entities.posts,
    comments: entities.comments
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getPosts: () => dispatch(getPosts()),
  getUserPosts: user => dispatch(getUserPosts(user)),
  deletePost: (postId, userId) => dispatch(deletePost(postId, userId)),
  getPostComments: postId => dispatch(getPostComments(postId)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));
