import React from 'react';
import GatewayFormContainer from './gatewayFormContainer';
import SignUpFormContainer from './signUpFormContainer';
import DemoButtonContainer from './demoButtonContainer';

export default () => (
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
          <div className='col-60pct'>
            <h2>Features:</h2>
            &nbsp;<i className='fa fa-user-o'></i>&emsp;<h3 className='feature'><span>Create</span> a <em>Profile</em></h3><br/>
            <i className='fa fa-handshake-o'></i>&ensp;&nbsp;&nbsp;<h3 className='feature'><span>Connect</span> with <em>Friends</em></h3><br/>
            <i className='fa fa-newspaper-o'></i>&emsp;<h3 className='feature'><span>Catch up</span> or <em>Comment</em></h3><br/>
            <DemoButtonContainer/>
          </div>
          <div className='col-40pct'>
            <h1 className='pretty-font'>RE-INVENT Yourself!</h1>
            <h3 className='byline'>It's fake and always will be.</h3>
            <SignUpFormContainer />
          </div>
        </div>
      </div>
    </main>
  </div>
);
