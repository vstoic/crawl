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
    if (this.props.venueReducer?.venues?.length > 0) {
      console.log("PropsVenue======>", this.props.venueReducer);
    }

    return (
      <div>
        {(this.props.venueReducer.venues || []).map((item) => (
        <Link to={`/venueDetail/${item._id}`}> {item.name} </Link>
        ))}
      </div>
    );
  }
}

export default VenueIndex