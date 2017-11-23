import { connect } from 'react-redux';
import { signUp } from '../session_actions';
import SignUpForm from './signUpForm';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session
  });
};

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
