import React from 'react';
import NavContainer from './navContainer';
import PostsIndexContainer from './postsIndexContainer';
import LoadingIcon from './loadingIcon';

export default class PostsIndexPage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    if (Object.keys(this.props.users).length < 2) this.props.getUsers();
  }

  // componentWillReceiveProps() {
  //
  // }

  render() {
    return (this.props.pageLoading ? <LoadingIcon /> :
      <div>
        <NavContainer />
        <div className='px40'></div>
        <PostsIndexContainer posts={this.props.posts}
                             comments={this.props.comments} />
      </div>);
  }
}
