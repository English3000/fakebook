import React from 'react';
import NavContainer from './navContainer';
import UserProfileContainer from './userProfileContainer';
// import PostFormContainer from './postFormContainer';
import PostsIndexContainer from './postsIndexContainer';

export default () => (<div>
  <NavContainer />
  <main className='ghostwhite-to-bottom'>
    <div className='center-900px'>
      <UserProfileContainer />
      {/* <PostFormContainer /> */}
      <PostsIndexContainer />
    </div>
  </main>
</div>);
