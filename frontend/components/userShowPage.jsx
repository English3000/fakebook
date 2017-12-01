import React from 'react';
import NavContainer from './navContainer';
import UserProfileContainer from './userProfileContainer';
import UserDetailsContainer from './userDetailsContainer';
import PostsIndexContainer from './postsIndexContainer';

export default class UserShowPage extends React.Component {
  componentDidMount() {
    if (Object.keys(this.props.users).length < 2) this.props.getUsers();
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) newProps.getUsers();
  // }

  render() {
    return (<div>
      <NavContainer />
      <main className='ghostwhite-to-bottom'>
        <div className='center-900px'>
          <UserProfileContainer users={this.props.users} />
          <div className='flex'>
            <UserDetailsContainer users={this.props.users} />
            <PostsIndexContainer />
          </div>
        </div>
      </main>
    </div>);
  }
}
