import { connect } from 'react-redux';
import { signUp } from '../session_actions';
import GatewayForm2 from './gatewayForm2';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session
  });
};

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(GatewayForm2);
