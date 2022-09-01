import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.currentUser}
  }

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id);
  }

  render () {
    if (this.props.currentUser) return(
      <div className="profile-container">
        <h1> {this.props.currentUser.username}'s Page</h1>
      </div>
    )
  }
}

export default Profile;