import React from 'react';
import NavContainer from './navContainer';
import PostsIndexContainer from './postsIndexContainer';
import LoadingIcon from './loadingIcon';

export default class PostsIndexPage extends React.Component {
  componentWillMount() {
    this.props.getPosts();
    if (Object.keys(this.props.users).length < 2) this.props.getUsers();
  }

  // componentWillReceiveProps() {
  //
  // }

  render() {
    if (this.props.pageLoading) {
      return <LoadingIcon />;
    } else {
      return (<div>
        <NavContainer />
        <div className='px40'></div>
        <PostsIndexContainer posts={this.props.posts}
                             comments={this.props.comments} />
      </div>);
    }
  }
}
