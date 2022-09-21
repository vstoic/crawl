import React, { Component } from "react";
import VenueIndexItem from "./venue_index_item";
import "../../assets/stylesheets/venue_index.css";


class VenueIndex extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchAllVenues();
  }

  render() {
    // this.props.fetchAllVenues()
  
    return (
      <div className="venue-index-main">
          <h1 className="venue-index-title">All Venues</h1>
        <div className="venue-index-container">
          {
            this.props.venues.map(venue => (
              // console.log(this.props.currentUser.id)
              <VenueIndexItem
              key={venue._id}
              venue={venue}
              currentUser={this.props.currentUser}
              />
            ))
          }
          {
            this.props.venues.forEach(venue => {
              if(venue.creator_id === this.props.currentUser.id) {
                // <Link to={"/crawlCreate/"} className="create-button">
                //   Create Crawl
                // </Link>
                return <span>It works!</span>
              }
            })
          }
          {
            this.props.venues.forEach(venue => {
              if(venue.creator_id === this.props.currentUser.id) {
                // <Link to={"/crawlCreate/"} className="create-button">
                //   Create Crawl
                // </Link>
                return <span>It works!</span>
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default VenueIndex