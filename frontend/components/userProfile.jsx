import React from 'react';
import merge from 'lodash/merge';
//bug: when switch to another page, cover photo & profile pic don't change
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'cover_photo': this.props.users.cover_photo,
      'profile_pic': this.props.users.profile_pic
    };

    this.select = this.select.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  select(field) {
    //hack from https://stackoverflow.com/questions/5138719/change-default-text-in-input-type-file (Sony Santos)
    return () => document.getElementById(field).click();
  }

  handleSubmit(field) {
    return event => {
      event.preventDefault();
      //PATCH user req ( merge(this.props.users, { [field]: event.target.value }) );
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    console.log(this.props.users.profile_pic);
    console.log(this.state);
    return (<div>
      <section>
        <div className='cover-photo'>
          {this.props.users.cover_photo ?
            <img className='cover-photo' src={this.props.users.cover_photo}/> :
            <div><button className='button-to-add cover-photo-button' onclick={this.select('select-cover-photo')}>+ cover photo</button>
            <input type="file"
                    id="select-cover-photo"
                     onSubmit={this.handleSubmit('cover_photo')}/></div>}
        </div>

        <div className='flex-bottom flex-between user-info-div'>
          <div className='flex-bottom'>
            <div className='profile-pic'>
              {this.props.users.profile_pic ?
                <img className='profile-pic' src={this.props.users.profile_pic}/> :
                <div><button className='button-to-add' onclick={this.select('select-profile-pic')}>+ profile photo</button>
                <input type="file"
                        id="select-profile-pic"
                         onSubmit={this.handleSubmit('profile_pic')}/></div>}
            </div>
            <p id='username'>{this.props.users.username}</p>
          </div>
          <div>
            {this.props.currentUser - this.props.currentPage !== 0 ?
              <p className='button-to-add'>+ friend</p> : ''}
          </div>
        </div>
      </section>
    </div>);
  }
}
