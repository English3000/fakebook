import React from 'react';
//renders at top of <Route exact path='/'... /> w/in <header>
//below it is description of platform functionality
export default class GatewayForm {
  constructor(props) {
    super(props);
    this.state = {'username': '', 'password': ''};
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    return (<form>
              <button onClick={this.props.signUp(this.state)}>Sign Up</button>
              <input type='text'
                onChange={this.update('username')}
                value={this.state.username}
                placeholder='Username'/>
                <input type='password'
                  onChange={this.update('password')}
                  value={this.state.password}
               placeholder='Password'/>
               <button onClick={this.props.signIn(this.state)}>Sign In</button>
            </form>);
  }
}
