import { connect } from 'react-redux';
import { createComment } from '../all_actions';
import CommentForm from './commentForm';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
