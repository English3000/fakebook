import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestPosts, getUserPosts, /*updatePost,*/ deletePost } from '../all_actions';
import PostsIndex from './postsIndex';

const mapStateToProps = ({ entities }, ownProps) => {
  console.log(entities);
  return {
    users: entities.users,
    posts: entities.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  getUserPosts: user => dispatch(getUserPosts(user)),
  deletePost: (postId, userId) => dispatch(deletePost(postId, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));
