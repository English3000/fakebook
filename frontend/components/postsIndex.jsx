import React from 'react';
import PostsIndexItem from './postsIndexItem';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    return (<div>
      <ul>
        {this.props.posts.map(
          post => <PostsIndexItem key={post.id}
                                  post={post}
                                  deletePost={this.props.deletePost}/>
        )}
      </ul>
    </div>);
  }
}
