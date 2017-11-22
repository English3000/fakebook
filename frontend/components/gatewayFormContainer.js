import { connect } from 'react-redux';
import { signUp, signIn, signOut } from '../session_actions';
import GatewayForm from './gatewayForm';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session
  });
};

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  signIn: user => dispatch(signIn(user)),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(GatewayForm);
