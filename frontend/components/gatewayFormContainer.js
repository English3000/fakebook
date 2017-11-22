import { connect } from 'react-redux';
import { signUp, signIn, signOut } from '../session_actions';
import GatewayForm from './gatewayForm';

// const mapStateToProps = state => ({
// MAP ERRORS
// })

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  signIn: user => dispatch(signIn(user)),
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(GatewayForm);
