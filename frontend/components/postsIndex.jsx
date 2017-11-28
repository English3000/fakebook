import React from 'react';
import PostFormContainer from './postFormContainer';
import PostsIndexItem from './postsIndexItem';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  componentWillMount() {
    this.fetchPosts(this.props);
  }

  componentWillReceiveProps(newProps) {
    // console.log("Props: ", this.props);
    // console.log("New props: ", newProps);
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.fetchPosts(newProps);
    }
  }

  fetchPosts({ match }) {
    if (match.params.id) {
      this.props.getUserPosts(match.params.id);
    } else {
      this.props.getPosts();
      if (Object.keys(this.props.users).length < 2) {
        this.props.getUsers();
      }
    }
  }

  render() {
    console.log("PostsIndex props: ", this.props);
    const { users, posts } = this.props;
    const parentProps = this.props;

    return (<div>
      <ul className='center-400px'>
        <PostFormContainer errors={this.props.errors} />
        {posts.all_ids.map(id => {
          const post = posts.by_id[id];

          return <PostsIndexItem key={id} author={users[post.user_id]}
                                 post={post} parentProps={parentProps}/>;
        })}
      </ul>
    </div>);
  }
}
