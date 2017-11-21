import { connect } from 'react-redux';
import { signUp, signIn } from '../all_actions';
import GatewayForm from './gatewayForm';

// const mapStateToProps = state => ({
//
// })

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  signIn: user => dispatch(signIn(user))
});

export default connect(null, mapDispatchToProps)(GatewayForm);
