import React from 'react';
import PostFormContainer from './postFormContainer';
import PostsIndexItem from './postsIndexItem';
import LoadingIcon from './loadingIcon';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  render() {
    // console.log("PostsIndex props: ", this.props);
    const { users, posts, match, currentUser } = this.props;
    let user;
    if (match.params.id) user = users[match.params.id];
    const parentProps = this.props;

    return (this.props.pageLoading ? <LoadingIcon /> :
      <div className='ghostwhite-100pct' style={{display: 'flex', justifyContent: 'center'}}>
        <div className='hover-dark' style={{margin: 12.5, marginTop: 15, width: 200, height: '100%', display: 'flex',
                                            justifyContent: 'center', alignItems: 'center'}}>
          Links
        </div>
        <ul style={{width: 450}}>
          {match.params.id && !users[currentUser].friend_ids.includes(parseInt(match.params.id)) ? '' :
          <div>
            <div className='px15'></div>
            <PostFormContainer errors={this.props.errors.session} />
          </div>}
          {posts && posts.all_ids.length > 0 ? posts.all_ids.map(id => {
            const post = posts.by_id[id];

            return <PostsIndexItem key={id} author={users[post.user_id]}
              post={post} parentProps={parentProps}/>;
            }) : <div>{/* welcome message/pop up for new user */}</div>}
        </ul>
        <div style={{margin: 12.5, width: 200}}>
          <div className='hover-dark' style={{height: 350, marginTop: 15, display: 'flex',
                                              justifyContent: 'center', alignItems: 'center'}}>
            Trending
          </div>
        </div>
      </div>);
  }
}
