import React from 'react';
import { Link } from 'react-router-dom';
import GatewayFormContainer from './gatewayFormContainer';
import SignUpFormContainer from './signUpFormContainer';
import DemoButtonContainer from './demoButtonContainer';

export default () => (
  <div>
    <header className='gateway-header'>
      <div className='flex-between flex-middle center-900px'>
        <Link to='/'><p className='logo-font gateway-logo-size'>fakebook</p></Link>
        <GatewayFormContainer />
      </div>
    </header>
    <main className='lavender'>
      <div className='center-900px top-padding'>
        <div className='flex'>
          <div className='col-55pct'>
            <h2>Features:</h2>
            &nbsp;<i className='fa fa-user-o fa-2x'></i>&emsp;<h3 className='feature'><span>Create</span> a <em>Profile</em></h3><br/>
            <i className='fa fa-handshake-o fa-2x'></i>&ensp;&nbsp;&nbsp;<h3 className='feature'><span>Connect</span> with <em>Friends</em></h3><br/>
            <i className='fa fa-newspaper-o fa-2x'></i>&emsp;<h3 className='feature'><span>Catch up</span> or <em>Comment</em></h3><br/>
            <DemoButtonContainer/>
          </div>
          <div className='col-45pct'>
            <h1>RE-INVENT Yourself!</h1>
            <h3 className='byline'>It's fake and always will be.</h3>
            <SignUpFormContainer />
          </div>
        </div>
      </div>
    </main>
    <footer className='gateway-footer'>
      <span>Learn More: &ensp;</span>
      <a href='https://www.linkedin.com/in/alexander-marks-katz-78a09a20/'>
        <i className='fa fa-linkedin-square fa-2x'></i>
      </a>&emsp;
      <a href='https://github.com/English3000/fakebook'>
        <i className='fa fa-github fa-2x'></i>
      </a>&emsp;
    </footer>
  </div>
);
