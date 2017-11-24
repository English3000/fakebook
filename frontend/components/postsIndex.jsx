import React from 'react';
import PostsIndexItem from './postsIndexItem';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  componentDidMount() {
    const {match} = this.props;
    if (match.params.id) {
      this.props.getUserPosts(this.props.users[match.params.id]);
    } else {
      this.props.requestPosts();
    }
  }

  render() {
    console.log(this.props);
    return (<div>
      <ul>
        {Object.keys(this.props.posts).length > 0 ? this.props.posts.reverse.map(
          post => <PostsIndexItem key={post.id}
                                  post={post}
                                  deletePost={this.props.deletePost}/>
        ) : ''}
      </ul>
    </div>);
  }
}
