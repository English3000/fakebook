import { connect } from 'react-redux';
import { signIn } from '../session_actions';
import DemoButton from './demoButton';

// const mapStateToProps = state => ({
//
// })

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user))
});

export default connect(null, mapDispatchToProps)(DemoButton);
