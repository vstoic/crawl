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
  
    console.log(this.state)
    return (
      <div>
        <ul>
        {
          this.props.venues.map(item => (
            <VenueIndexItem
            key={item._id}
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