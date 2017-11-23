import { connect } from 'react-redux';
import { /*signUp,*/ signIn } from '../session_actions';
import GatewayForm from './gatewayForm';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  // signUp: user => dispatch(signUp(user)),
  signIn: user => dispatch(signIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(GatewayForm);
