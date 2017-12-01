import React from 'react';
import merge from 'lodash/merge';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.users[this.props.match.params.id] ?
                  this.props.users[this.props.match.params.id] :
                  {'id': this.props.currentUser, 'username': '',
                  'profile_pic': '', 'cover_photo': '',
                  'custom_link': '' };

    this.select = this.select.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.request = this.request.bind(this);
    this.accept = this.accept.bind(this);
    this.reject = this.reject.bind(this);
  }

  // componentDidMount() {
  //   if (Object.keys(this.props.users).length < 2) this.props.getUsers();
  // }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.users[newProps.match.params.id]);
  }

  select(field) {
    //hack from https://stackoverflow.com/questions/5138719/change-default-text-in-input-type-file (Sony Santos)
    return () => document.getElementById(field).click();
  }

  handleSubmit(field) {
    return event => {
      event.preventDefault();
      if (field === 'custom_link') {
        // console.log(this.state);
        // console.log(this.props.users[this.props.match.params.id]);
        this.setState({ [field]: $('#custom-link-input').val() }, () => this.props.updateUser(this.state));
      } else { //clears images upon AJAX, new one renders on refresh
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => this.setState({ [field]: reader.result }, () => this.props.updateUser(this.state));

        if (file) reader.readAsDataURL(file);
        // console.log(this.state);
      }
    };
  }

  render() {
    const { users, match } = this.props;
    const user = users[match.params.id];

    if (this.props.currentUser - match.params.id === 0) {
      return (<div className='plus-z-index'><section>
        <div className='cover-photo' onClick={this.select('select-cover-photo')}>
          {user && user.cover_photo ? <div>
            <img className='cover-photo' src={user.cover_photo}/>
            <i className='fa fa-pencil-square-o fa-2x springgreen text-shadow-black' id='cover-edit'></i>
          </div> : <div>
            <button className='friend-button cover-photo-button'>+ cover photo</button>
          </div>}

         <input type="file"
                 id="select-cover-photo"
                  onChange={this.handleSubmit('cover_photo')}/>
        </div>

        <div className='flex-bottom flex-between user-info-div'>
          <div className='flex-bottom'>
            <div className='profile-pic flex-middle flex-center' onClick={this.select('select-profile-pic')}>
              {user && user.profile_pic ? <div>
                <img className='profile-pic' src={user.profile_pic}/>
                <i className='fa fa-pencil-square-o fa-2x springgreen text-shadow-black' id='profile-edit'></i>
              </div> : <button className='friend-button'>+ profile photo</button>}

              <input type="file" id="select-profile-pic" onChange={this.handleSubmit('profile_pic')}/>
            </div>

            <div id='username'>{user ? user.custom_link ?
              <a href={user.custom_link} target='_blank'>
                {user.username}&nbsp;
                <i className='fa fa-link springgreen text-shadow-black' onClick={() => $('.fa-link').toggleClass('visible')}>
                  &nbsp;<form id='custom-link-form' onSubmit={this.handleSubmit('custom_link')}>
                    <input type='url' id='custom-link-input' placeholder='http://Set-Custom-Link' defaultValue={user.custom_link} />
                    <input className='submit-button' type='submit' value='save'/>
                  </form>
                </i>
              </a> : <div>{user.username}
                &nbsp;<i className='fa fa-link springgreen text-shadow-black' onClick={() => $('.fa-link').toggleClass('visible')}>
                  &nbsp;<form id='custom-link-form' onSubmit={this.handleSubmit('custom_link')}>
                    <input type='url' id='custom-link-input' placeholder='http://Set-Custom-Link' defaultValue={this.state.custom_link} />
                    <input type='submit' value='save'/>
                  </form>
                </i>
              </div> : ''}
            </div>
          </div>
          {user ? <span className='friend-button green-b shift-right'>
            {user.friend_ids.length} friend{user.friend_ids.length !== 1 ? 's' : ''}
          </span> : ''}
          {/* friend list dropdown on hover/click */}
        </div>
      </section></div>);
    } else {
      return (<div className='plus-z-index'><section><div className='cover-photo'>
        {user && user.cover_photo ? <div>
          <img className='cover-photo' src={user.cover_photo}/>
        </div> : ''}
      </div>

      <div className='flex-bottom flex-between user-info-div'>
        <div className='flex-bottom'>
          <div className='profile-pic no-pointer'>
            {user && user.profile_pic ? <div>
              <img className='profile-pic no-pointer' src={user.profile_pic}/>
            </div> : ''}
          </div>

          <div id='username'>{user && user.custom_link ?
            <a href={user.custom_link} target='_blank'>
              {user.username}
            </a> : user ? user.username : ''}
          </div>
        </div>

        {user && users[this.props.currentUser].friend_ids.includes(user.id) ?
            <span className='friend-button unfriend-button shift-right'>friend <button onClick={this.reject}>
              &times;</button></span> :
        user && users[this.props.currentUser].request_ids.includes(user.id) ?
          <div className='request-pending-div flex'>
            <button className='accept-friend-button' onClick={this.accept}>&#10004;</button>
            <span className='friend-button yellow'>friend</span>
            <button className='reject-friend-button' onClick={this.reject}><span>&times;</span></button>
        </div> : <button className='friend-button shift-right' onClick={this.request}>+ friend</button>}
      </div></section></div>); //bug: see +friend for a sec as loads
    }
  }

  request(event) {
    event.preventDefault();
    this.props.requestFriendship({ user_id: this.props.currentUser,
                                   friend_id: this.props.match.params.id,
                                   status: 'PENDING' }).then(() => alert('Sent'));
  }

  accept(event) {
    event.preventDefault();
    this.props.acceptFriendship({ friend_id: this.props.currentUser,
                                  user_id: this.props.match.params.id,
                                  status: 'APPROVED' });
  }

  reject(event) {
    event.preventDefault();
    this.props.rejectFriendship({ unfriender_id: this.props.currentUser,
                                  unfriended_id: this.props.match.params.id });
  }
}
