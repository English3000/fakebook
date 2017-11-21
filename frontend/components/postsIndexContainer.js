import { connect } from 'react-redux';
import { requestPosts, /*updatePost,*/ deletePost } from '../all_actions';
import PostsIndex from './postsIndex';

const mapStateToProps = state => ({
  posts: Object.values(state.posts)
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
