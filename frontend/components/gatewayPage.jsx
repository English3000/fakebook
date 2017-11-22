import React from 'react';
import GatewayFormContainer from './gatewayFormContainer';

export default class GatewayPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.signIn({'username':'AMK', 'password':'12345678'});
  }

  render() {
    return (
      <div>
        <header className='gateway-header'>
          <div className='flex-between flex-middle center-900px'>
            <p className='logo-font'>fakebook</p>
            <GatewayFormContainer />
          </div>
        </header>
        <main className='lavender-to-bottom'>
          <div className='center-900px top-padding'>
            <div className='flex'>
              <div className='col-66pct'>
                <h2>Features:</h2>
                &nbsp;<i className='fa fa-user-o'></i>&emsp;<h3 className='feature'><span>Create</span> a <em>Profile</em></h3><br/>
                <i className='fa fa-handshake-o'></i>&ensp;&nbsp;&nbsp;<h3 className='feature'><span>Connect</span> with <em>Friends</em></h3><br/>
                <i className='fa fa-newspaper-o'></i>&emsp;<h3 className='feature'><span>Catch up</span> or <em>Comment</em></h3>
              </div>
              <div className='col-33pct'>
                <h1 className='pretty-font'>RE-INVENT Yourself!</h1>
                <button onClick={this.handleClick} className='max-size gray-button white center-text'>DEMO</button>{/* <DemoButtonContainer /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
