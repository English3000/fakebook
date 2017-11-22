import React from 'react';
//renders at top of <Route exact path='/'... /> w/in <header>
//below it is description of platform functionality
export default class GatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
    // this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
    // this.signOut = this.signOut.bind(this); //MOVE to diff. component
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

  // MOVE to diff. component
  // signOut(event) {
  //   event.preventDefault();
  //   this.props.signOut(this.state);
  // }

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
      <ul className='gateway-errors hidden' onClick={() => $('.gateway-errors').addClass('hidden')}>
        {this.props.errors.map(err => <li key={err}>{err}</li>)}
      </ul>
      <form>
        {/* <button onClick={this.signUp} id='sign-up'><p>Sign</p><p className='bump-left'>Up</p></button>&emsp; */}
        {/* <div className='inline-block input-box'> */}
          <input type='text'
            onChange={this.update('username')}
            onKeyDown={this.handleEnter}
            value={this.state.username}
            placeholder='Username'
            autoFocus/>&ensp;
          <input type='password'
            onChange={this.update('password')}
            onKeyDown={this.handleEnter}
            value={this.state.password}
            placeholder='Password'/>&ensp;
        {/* </div> */}
        <button onClick={this.signIn}>Sign In</button>
      </form>
      {/* MOVE to diff. component */}
      {/* <button onClick={this.signOut}>Sign Out</button> */}
    </div>);
  }
}
