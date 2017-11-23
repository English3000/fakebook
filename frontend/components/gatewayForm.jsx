import React from 'react';

export default class GatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    // this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  // signUp(event) {
  //   event.preventDefault();
  //   this.props.signUp(this.state)
  //     .then(() => $('.gateway-errors').addClass('hidden'),
  //     () => $('.gateway-errors').removeClass('hidden'));
  // }

  signIn(event) {
    event.preventDefault();
    this.props.signIn(this.state)
      .then(() => $('.gateway-errors').addClass('hidden'),
      () => $('.gateway-errors').removeClass('hidden'));
  }

  // handleEnter(event) {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     this.props.signIn(this.state)
  //       .then(() => $('.gateway-errors').addClass('hidden'),
  //       () => $('.gateway-errors').removeClass('hidden'));
  //   }
  // }

  render() {
    return (<div>
      {/* Heroku version isn't working; maybe need to seed production db??? */}
      <ul className='gateway-errors hidden' onClick={() => $('.gateway-errors').addClass('hidden')}>
        {this.props.errors.length > 0 ? this.props.errors.map(err => <li key={err}>{err}</li>) : ''}
      </ul>
      <form className='signInForm'>
        {/* <button onClick={this.signUp} id='sign-up'><p>Sign</p><p className='bump-left'>Up</p></button>&emsp; */}
        {/* <div className='inline-block input-box'> */}
          <input type='text'
            onChange={this.update('username')}
            // onKeyDown={this.handleEnter}
            value={this.state.username}
            placeholder='Username'
            autoFocus/>&ensp;
          <input type='password'
            onChange={this.update('password')}
            // onKeyDown={this.handleEnter}
            value={this.state.password}
            placeholder='Password'/>&ensp;
        {/* </div> */}
        <button onClick={this.signIn}>Sign In</button>
      </form>
    </div>);
  }
}
