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
        <div className='hover-dark' style={{marginTop: 15, marginRight: 15, width: 210, height: 735, fontSize: 18,
                                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
        <div style={{marginLeft: 15, width: 210}}>
          <div className='hover-dark' style={{height: 350, fontSize: 18, marginTop: 15, display: 'flex',
                                              justifyContent: 'center', alignItems: 'center'}}>
            Trending
          </div>
        </div>
        <div className='hover-dark' style={{position: 'fixed', marginLeft: 15,
                                            width: 210, height: 735}}>Chat</div>
      </div>);
  }
}
