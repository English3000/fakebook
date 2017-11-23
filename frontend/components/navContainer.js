import { connect } from 'react-redux';
import { signOut } from '../session_actions';
import Nav from './nav';

// const mapStateToProps = state => ({
// MAP ERRORS
// })

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(Nav);
