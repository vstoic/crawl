import axios from "axios";
import React from "react";
import "../../assets/stylesheets/profile.css";
import { Link, withRouter } from "react-router-dom";
import equal from 'fast-deep-equal';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: this.props.currentUser, 
      imageSet:null,
      crawls: this.props.userCrawls
    }

    this.removeCrawl = this.removeCrawl.bind(this)
  }

//   componentDidUpdate(prevProps) {
//     if (!equal(prevProps.crawls, this.props.crawls)) {
//       this.props.fetchCrawlByUser(this.props.match.params.id)
//     }
// }

  


  componentDidMount () {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchCrawlByUser(this.props.match.params.id)
    this.props.fetchAllCrawls();
    this.props.fetchAllCrawlsbyMo();
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

  removeCrawl = async (crawlId) => {
    const {deleteCrawl, currentUser, history} = this.props
    await deleteCrawl(crawlId);
      history.push("/");
    // const newCrawls = Object.assign([], this.state.crawls)
    // const {deleteCrawl, currentUser, history} = this.props
    // // const newCrawls = this.state.crawls.slice()
    // deleteCrawl(crawlId)
    // newCrawls.splice(idx, 1)
    // this.setState({ crawls: newCrawls })
    // history.push(`/users/${currentUser.id}`)
  }

  // const venueDelete = async () => {
  //   await deleteVenue(props.match.params.id);
  //   history.push("/venues");
  // };

 

  render () {
      console.log(
        "ImageData========>",
        this.props.crawlsReducer?.crawlByUser?.data);
        this.props.crawlsReducer?.crawlByUser?.data?.sort((a,b) => (b.votecount) -  (a.votecount))
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
            alt='<img className="personal-link-photo"/>'
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
            (item, idx) => (
              <div key={item._id} className="profile-right-crawls">
                <Link to={`/crawl/${item._id}`}>{item.title}</Link>
                <br/>
                <Link to={`/crawlEdit/${item._id}`}>Edit Crawl</Link>
                <button onClick={() => this.removeCrawl(item._id)}>Delete Crawl</button>
              </div>
            )
          )}
         
        </div>
        </div>
      );
  }
}

export default withRouter(Profile);
