import React, { Component } from "react";
import {Link} from 'react-router-dom'
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
    if (this.props.venues.venues?.length > 0) {
      console.log("PropsVenue======>", this.props.venues.venues);
    }

    return (
      <div>
        {this.props.venues.venues.map((item) => (
        <Link to={`/venueShow/${item._id}`}> {item.name} </Link>
        ))}
      </div>
    );
  }
}

export default VenueIndex