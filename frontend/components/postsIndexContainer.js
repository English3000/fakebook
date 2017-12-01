import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers,
         getPosts, getUserPosts,
         updatePost, updateComment,
         deletePost, deleteComment,
         likePost, likeComment,
         unlikePost, unlikeComment } from '../all_actions';
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
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => dispatch(deletePost(id)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  likePost: post => dispatch(likePost(post)),
  unlikePost: post => dispatch(unlikePost(post)),
  likeComment: comment => dispatch(likeComment(comment)),
  unlikeComment: comment => dispatch(unlikeComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));
