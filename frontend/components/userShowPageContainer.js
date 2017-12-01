import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers } from '../all_actions';
import UserShowPage from './userShowPage';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUserId,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);
