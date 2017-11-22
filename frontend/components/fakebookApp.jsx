import React from 'react';
import { Route } from 'react-router-dom';
import GatewayFormContainer from './gatewayFormContainer';

export default () => (
  <div>
    <header className='gateway-header'>
      <div className='flex-between flex-middle center-900px'>
        <p className='logo-font'>fakebook</p>
        <GatewayFormContainer />
      </div>
    </header>
    <main className='lavender-to-bottom'>
      <div className='center-900px flex-around'>
        <div className='inline-block leftmost'>
          <h1 className='pretty-font'>RE-INVENT Yourself!</h1>&emsp;
          <button className='max-size gray-button white'>DEMO</button>{/* <DemoButtonContainer /> */}
        </div>
        <div className='inline-block'>
          <h2>Feature 1</h2>
          <h2>Feature 2</h2>
          <h2>Feature 3</h2>
        </div>
      </div>
    </main>
  </div>
);
