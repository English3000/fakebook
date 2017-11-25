import React from 'react';
import { Link } from 'react-router-dom';
import GatewayFormContainer from './gatewayFormContainer';
// import SignUpFormContainer from './signUpFormContainer';
import DemoButtonContainer from './demoButtonContainer';

export default () => (
  <div>
    <header className='gateway-header'>
      <div className='flex-between flex-middle center-900px'>
        <a href='https://github.com/English3000/fakebook'><p className='logo-font gateway-logo'>f y i</p></a>
        <GatewayFormContainer />
      </div>
    </header>
    <main className='ghostwhite flex-middle'>
      <div className='center-900px flex-center'>
        <div className='features-circle flex-center flex-middle'>
          <div className='flex-middle flex-column'>
            <h2>Features:</h2>
            <section className='flex'>
              <div className='icons-div flex-middle flex-column'>
                <i className='fa fa-user-o fa-2x'></i>
                <i className='fa fa-handshake-o fa-2x'></i>
                <i className='fa fa-newspaper-o fa-2x'></i>
              </div>
              <div className='features-div'>
                <h3 className='feature'><span>Create</span> a <em>Profile</em></h3><br/>
                <h3 className='feature'><span>Connect</span> with <em>Friends</em></h3><br/>
                <h3 className='feature'><span>Catch up</span> or <em>Comment</em></h3>
              </div>
            </section>
            <DemoButtonContainer/>
          </div>
        </div>
      </div>
    </main>
    <footer className='gateway-footer flex-center'>
      <div className='flex'>
        <span>DEV &nbsp;= &nbsp;</span>
        <a href='https://www.linkedin.com/in/alexander-marks-katz-78a09a20/'>
          <i className='fa fa-linkedin-square fa-2x'></i>
        </a>
      </div>
    </footer>
  </div>
);
