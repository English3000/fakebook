import React from 'react';
import NavContainer from './navContainer';
// import PostFormContainer from './postFormContainer';
import PostsIndexContainer from './postsIndexContainer';

export default () => (<div>
  <NavContainer />
  {/* <PostFormContainer /> */}
  <div className='px40'></div>
  <PostsIndexContainer />
</div>);
