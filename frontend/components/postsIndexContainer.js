import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPosts, getUserPosts, getUsers, /*updatePost,*/ deletePost } from '../all_actions';
import PostsIndex from './postsIndex';

const mapStateToProps = ({ entities }) => {
  return {
    users: entities.users,
    posts: entities.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getUserPosts: user => dispatch(getUserPosts(user)),
  getUsers: () => dispatch(getUsers()),
  deletePost: (postId, userId) => dispatch(deletePost(postId, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));
