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
      console.log("ImageData========>", this.props);
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
          <img className="profile-img" src={profileImage} alt='<img className="personal-link-photo"/>'/>
          <input type="file" accept="images/*" onChange={(e) => this.getImageUrl(e.target.files[0])}/>
          <h1> {this.props.viewedUser.username}'s Page</h1>
        </div>

        <div className="profile-right">
          <div className="profile-crawl-container">
            {this.props.crawlsReducer?.crawlByUser?.data?.length == 0 && (
              <div className="profile-right-crawls">No Crawls Created</div>
            )}
            {(this.props.crawlsReducer?.crawlByUser?.data || []).map((item) => (
                <div className="each-crawl-container">
                  <div className="profile-crawl-header">
                    <Link to={`/crawl/${item._id}`}>{item.title}</Link>
                    <div className="edit-crawl-container"><Link to={`/crawlEdit/${item._id}`}><img className="edit-icon" src="https://i.postimg.cc/mkny8198/edit-icon.png" alt="" /></Link></div>
                    <div className="edit-crawl-container"><Link  onClick={()=>this.removeCrawl(item._id)}><img className="edit-icon" src="https://i.postimg.cc/mkny8198/delete-icon.png" alt="" /></Link></div>
                    </div>
                  <div className="each-crawl">
                    <div className="each-desc">
                      <div className="each-sub-desc">
                        <p>Upvotes: {item.votecount}</p>
                        <p>Avg Time: {item.time}</p>
                        <p>Cost: {item.cost}</p>
                        <p>Avg Distance: {item.distance}</p>
                      </div>
                      <p>Description: {item.description}</p>
                    </div>
                    {/* <div className="crawl-venue-container"> */}
                      {/* <div>
                        {venues?.map((item) => (
                          <div key={renderName(item)._id} className="each-crawl-venue-details">
                            <li><Link to={`/venueShow/${item}`}>{renderName(item).name}</Link></li>
                            <div className="mp-image-container">
                            </div>
                          </div>
                        ))}
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      );
  }
}

export default withRouter(Profile);



