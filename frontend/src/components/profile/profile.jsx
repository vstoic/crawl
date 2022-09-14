import axios from "axios";
import React from "react";
import "../../assets/stylesheets/profile.css";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.currentUser , imageSet:null}
  }

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id);
     this.props.fetchCrawlByUser(this.props.match.params.id)
    this.props.fetchAllCrawls();
   
  }
getImageUrl = async(image) => {


const data = new FormData();
data.append("file", image);
data.append("upload_preset", "uqb0krjs");
data.append("cloud_name", "dhudcmiwm");
fetch("  https://api.cloudinary.com/v1_1/dhudcmiwm/image/upload", {
  method: "post",
  body: data,
})
  .then((resp) => resp.json())
  .then((data) => {
    let userData = {
      id: this.props.match.params.id,
      profileImage:data.url
    };
    this.props.updateImage(userData)
   
    // setUrl(data.url);
  })
  .catch((err) => console.log(err));
}
  render () {
      console.log("ImageData========>", this.props.userFetch?.currentUser);
      let profileImage =
        this.props.userFetch?.currentUser != undefined
          ? this.props.userFetch?.currentUser?.data?.profileImage
          : this.props.viewedUser?.profileImage;
    if (this.props.viewedUser) return (
      <div className="profile-container">
        <div className="profile-left">
          {/* {this.props.userFetch?.currentUser != undefined && (
            <img
              className="profile-img"
              src={this.props.userFetch?.currentUser?.data?.profileImage}
              alt='<img className="personal-link-photo"
             />'
            />
          )} */}

          <img
            className="profile-img"
            src={profileImage}
            alt='<img className="personal-link-photo"
             />'
          />

          <input
            type="file"
            accept="images/*"
            onChange={(e) => this.getImageUrl(e.target.files[0])}
          />
          <h1> {this.props.viewedUser.username}'s Page</h1>
        </div>

        <div className="profile-right">
          {this.props.crawlsReducer?.crawlByUser?.data?.length == 0 && (
            <div className="profile-right-crawls">No crawls here</div>
          )}
          {(this.props.crawlsReducer?.crawlByUser?.data || []).map(
            (item, index) => (
              <div key={item._id} className="profile-right-crawls">
                <Link to={`/crawl/${item._id}`}>{item.title} </Link>
                {item.category}
                {item.time}
              </div>
            )
          )}
          {/* <div className="profile-right-crawls">First Crawl goes here</div>
          <div className="profile-right-crawls">Second Crawl goes here</div>
          <div className="profile-right-crawls">Third Crawl goes here</div>
          <div className="profile-right-crawls">Fourth Crawl goes here</div>
          <div className="profile-right-crawls">Fifth Crawl goes here</div>
          <div className="profile-right-crawls">Sixth Crawl goes here</div> */}
        </div>
      </div>
    );
  }
}

export default Profile;