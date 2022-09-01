import React, { Component } from "react";
import VenueIndexItem from "./venue_index_item";
import "../../assets/stylesheets/venue_index.css";


class VenueIndex extends Component {
  
  componentDidMount() {
    this.props.fetchAllVenues();
  }

  render() {
    // this.props.fetchAllVenues()
    if (this.props.venues.venues?.length > 0) {
      console.log("PropsVenue======>", this.props.venues.venues);
    }

    return (
      <div>
        <ul>
        {
          this.props.venues.venues.map(item => (
            <VenueIndexItem
            key={item.id}
            item={item}
            />
          ))
        }
        </ul>
      </div>
    );
  }
}

export default VenueIndex