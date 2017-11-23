import React from 'react';

export default class GatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
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

  signIn(event) {
    event.preventDefault();
    this.props.signIn(this.state)
      .then(() => $('.gateway-errors').addClass('hidden'),
      () => $('.gateway-errors').removeClass('hidden'));
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.signIn(this.state)
        .then(() => $('.gateway-errors').addClass('hidden'),
        () => $('.gateway-errors').removeClass('hidden'));
    }
  }

  render() {
    return (<div>
      <ul className='gateway-errors hidden' onClick={() => $('.gateway-errors').addClass('hidden')}>
        {this.props.errors.length > 0 ? this.props.errors.map(err => <li key={err}>{err}</li>) : ''}
      </ul>
      <form className='gateway-form flex-middle'>
        <button onClick={this.signUp} id='sign-up'><p>sign</p><p className='bump-left'>UP</p></button>&emsp;
        <div className='inputs-div'>
          <input type='text'
            onChange={this.update('username')}
            onKeyDown={this.handleEnter}
            value={this.state.username}
            placeholder='Username'
            autoFocus/><br/>
          <input type='password'
            onChange={this.update('password')}
            onKeyDown={this.handleEnter}
            value={this.state.password}
            placeholder='Password'/>
        </div>
        <button onClick={this.signIn} id='sign-in'><p>sign</p><p className='bump-more-left'>IN</p></button>
      </form>
    </div>);
  }
}
