import { connect } from 'react-redux';
import { signUp, signIn, signOut } from '../session_actions';
import DemoButton from './demoButton';

// const mapStateToProps = state => ({
// MAP ERRORS
// })

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user))
});

export default connect(null, mapDispatchToProps)(DemoButton);
