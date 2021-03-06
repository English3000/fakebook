import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    this.signUp = this.signUp.bind(this);
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  signUp(event) {
    event.preventDefault();
    this.props.signUp(this.state)
      .then(() => $('.gateway-errors').addClass('hidden'),
      () => $('.gateway-errors').removeClass('hidden'));
  }

  render() {
    return (<div>
      <form className='signUpForm'>
        <input type='text'
          onChange={this.update('username')}
          value={this.state.username}
          placeholder='Username'/><br/>
        <input type='password'
          onChange={this.update('password')}
          value={this.state.password}
          placeholder='Password'/><br/>
        <button onClick={this.signUp}>Sign Up</button>
      </form>
    </div>);
  }
}
