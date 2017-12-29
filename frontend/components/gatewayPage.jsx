import React from 'react';
import { Link } from 'react-router-dom';
import GatewayFormContainer from './gatewayFormContainer';
import DemoButtonContainer from './demoButtonContainer';

export default () => (
  <div>
    <header className='gateway-header'>
      <div className='flex-between flex-middle center-900px'>
        <div style={{textAlign: 'center', color: 'white'}}>
          <p style={{fontSize: 28, fontWeight: 600, fontStyle: 'italic'}}>
            Stay up to date</p>
          <p style={{fontSize: 28, fontWeight: 300}}>with friends!</p>
        </div>
        <GatewayFormContainer />
        <div style={{display: 'flex', justifyContent: 'flex-end', width: 172}}>
          <a href='https://github.com/English3000/fyi#readme' target='_blank'>
            <p className='logo-font gateway-logo'>f y i</p>
          </a>
        </div>
      </div>
    </header>
    <main className='ghostwhite flex-middle'>
      <div className='center-900px flex-center'>
        <div className='features-circle flex-center flex-middle'>
          <div className='flex-middle flex-column'>
            <h2 style={{textTransform: 'uppercase', paddingBottom: 7.5,
                        marginTop: -5}}>Featuring</h2>
            <section className='flex' style={{paddingBottom: 10}}>
              <div className='icons-div flex-middle flex-column'>
                <i className='fa fa-user-o fa-2x green'></i>
                <i className='fa fa-newspaper-o fa-2x green'></i>
                <i className='fa fa-paper-plane-o fa-2x green'></i>
              </div>
              <div className='features-div'>
                <h3 className='feature'>Profiles</h3><br/>
                <h3 className='feature' style={{fontWeight: 500, fontStyle: 'italic'}}>
                  Newsfeed</h3><br/>
                <h3 className='feature'>Comments</h3>
              </div>
              <div style={{padding: 25}}></div>
              <div className='icons-div flex-middle flex-column'>
                <i className='fa fa-handshake-o fa-2x green'></i>
                <i className='fa fa-search fa-2x green'></i>
                <i className='fa fa-thumbs-o-up fa-2x green'></i>
              </div>
              <div className='features-div'>
                <h3 className='feature' style={{fontWeight: 500, fontStyle: 'italic'}}>
                  Friending</h3><br/>
                <h3 className='feature'>Search</h3><br/>
                <h3 className='feature' style={{fontWeight: 500, fontStyle: 'italic'}}>
                  Likes</h3>
              </div>
            </section>
            <DemoButtonContainer/>
          </div>
        </div>
      </div>
    </main>
    <footer className='gateway-footer flex-center'>
      <a href='https://github.com/English3000/fyi#readme' target='_blank'>Find the rest!</a>
    </footer>
  </div>
);
