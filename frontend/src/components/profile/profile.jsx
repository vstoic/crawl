import React from "react";
import "../../assets/stylesheets/profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.currentUser}
  }

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchAllCrawls();
  }

  render () {
    console.log(this.props.viewedUser);
    if (this.props.viewedUser) return(
      <div className="profile-container">


      <div className="profile-left">


        <img className="profile-img" src={this.props.viewedUser.profileImage} alt="" />
        <h1> {this.props.viewedUser.username}'s Page</h1>
     


      </div>

      <div className="profile-right">
          <div className="profile-right-crawls">First Crawl goes here</div>
        <div className="profile-right-crawls">Second Crawl goes here</div>
        <div className="profile-right-crawls">Third Crawl goes here</div>
        <div className="profile-right-crawls">Fourth Crawl goes here</div>
        <div className="profile-right-crawls">Fifth Crawl goes here</div>
          <div className="profile-right-crawls">Sixth Crawl goes here</div>



      </div>
       
     
     
     
     
      </div>
    )
  }
}

export default Profile;