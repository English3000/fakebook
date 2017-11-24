import React from 'react';
import merge from 'lodash/merge';
//bug: when switch to another page, cover photo & profile pic don't change
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.users[this.props.match.params.id] ?
      this.props.users[this.props.match.params.id] : '';

    this.select = this.select.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.users).length < 2) {
      this.props.fetchUsers();
    }
  }

  select(field) {
    //hack from https://stackoverflow.com/questions/5138719/change-default-text-in-input-type-file (Sony Santos)
    return () => document.getElementById(field).click();
  }

  handleSubmit(field) {
    return event => {
      event.preventDefault();
      this.setState({ [field]: event.target.value }, () => this.props.updateUser(this.state));
    };
  }

  render() {
    const { users, match } = this.props;

    return (<div>
      <section>
        <div className='cover-photo'>
          {users[match.params.id] && users[match.params.id].cover_photo ?
            <img className='cover-photo' src={users[match.params.id].cover_photo}/> :
            <div><button className='button-to-add cover-photo-button' onClick={this.select('select-cover-photo')}>+ cover photo</button>
            <input type="file"
                    id="select-cover-photo"
                     onChange={this.handleSubmit('cover_photo')}/></div>}
        </div>

        <div className='flex-bottom flex-between user-info-div'>
          <div className='flex-bottom'>
            <div className='profile-pic'>
              {users[match.params.id] && users[match.params.id].profile_pic ?
                <img className='profile-pic' src={users[match.params.id].profile_pic}/> :
                <div><button className='button-to-add' onClick={this.select('select-profile-pic')}>+ profile photo</button>
                <input type="file"
                        id="select-profile-pic"
                         onChange={this.handleSubmit('profile_pic')}/></div>}
            </div>
            <p id='username'>{users[match.params.id] ? users[match.params.id].username : ''}</p>
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
