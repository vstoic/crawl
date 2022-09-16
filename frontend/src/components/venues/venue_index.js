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
      <div>
        <ul>
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
        </ul>
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
    );
  }
}

export default VenueIndex