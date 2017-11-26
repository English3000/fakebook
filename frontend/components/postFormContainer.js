import { connect } from 'react-redux';
import { createPost } from '../all_actions';
import PostForm from './postForm';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
