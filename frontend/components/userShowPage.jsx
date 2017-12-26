import React from 'react';
import NavContainer from './navContainer';
import UserProfileContainer from './userProfileContainer';
import UserDetailsContainer from './userDetailsContainer';
import PostsIndexContainer from './postsIndexContainer';
import FriendsGrid from './friendsGrid';
import LoadingIcon from './loadingIcon';

export default class UserShowPage extends React.Component {
  componentDidMount() {
    this.props.getUserPosts(this.props.match.params.id);
    if (Object.keys(this.props.users).length < 2) this.props.getUsers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.getUserPosts(newProps.match.params.id);
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) newProps.getUsers();
  // }

  render() {
    return (this.props.pageLoading ? <LoadingIcon /> :
      <div>
        <NavContainer />
        <main className='ghostwhite-100pct'>
          <div className='center-900px'>
            <UserProfileContainer users={this.props.users} />
            <div className='flex'>
              <UserDetailsContainer users={this.props.users} />
              <PostsIndexContainer posts={this.props.posts}
                                   comments={this.props.comments} />
              <FriendsGrid users={this.props.users} pageId={this.props.match.params.id}
                           currentUser={this.props.currentUser}/>
            </div>
          </div>
        </main>
      </div>);
  }
}
