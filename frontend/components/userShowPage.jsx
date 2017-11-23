import React from 'react';
import NavContainer from './navContainer';
import UserProfileContainer from './userProfileContainer';
// import PostFormContainer from './postFormContainer';
import PostsIndex from './postsIndex';

export default () => (<div>
  <NavContainer />
  <main className='lavender-to-bottom'>
    <div className='center-900px'>
      <UserProfileContainer />
      {/* <PostFormContainer /> */}
      <PostsIndex />
    </div>
  </main>
</div>);
