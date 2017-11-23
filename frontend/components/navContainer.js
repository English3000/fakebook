import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../session_actions';
import Nav from './nav';

// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default withRouter(connect(null, mapDispatchToProps)(Nav));
