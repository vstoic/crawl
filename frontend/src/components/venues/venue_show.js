import React from "react";
import GoogleMap from "../map/GoogleMap";
import "../../assets/stylesheets/venue_show.css";
import "../../assets/stylesheets/map.css";

class VenueShow extends React.Component {
    constructor(props) {
      super(props);
      // this.state = this.props.venue;
      this.state = {
        venue: "",
        venueb: this.props.venue
      }
    }

    componentDidMount () {
      this.props.fetchVenue(this.props.match.params.id)
      .then((response) => {
        this.setState({
          venue: response.venue.data
      })
      })
    }

    render () {
      console.log(this.state.venueb);
      if (!this.state.venueb) {
      return(
        <div className="venue-show-main">
              <div className="left-column">
                 <div className="venue-show-image-container">
                   <img src={this.state.venue.image} className="venue-show-image" />
                 </div>
                 <div className="venue-show-map-container">
                   <div className="map-container">
                     <GoogleMap venueLat={this.state.venue.latitude} venueLong={this.state.venue.longitude} />
                   </div>
                 </div>
               </div>
               <div className="right-column">
                 <div className="business-details">
                   <h1>{this.state.venue.name}</h1>
                   <div className="cost-website">
                     <p>{this.state.venue.cost}</p>
                     <a href={this.state.venue.website} target="_blank" rel="noopener">
                       Website
                     </a>
                   </div>
                   <p>Details: {this.state.venue.description}</p>
                   <p>Address: {this.state.venue.address}</p>
                 </div>
               </div>
             </div>
      )} 
      else {
        return(
          <div className="venue-show-main">
              <div className="left-column">
                 <div className="venue-show-image-container">
                   <img src={this.state.venueb.image} className="venue-show-image" />
                 </div>
                 <div className="venue-show-map-container">
                   <div className="map-container">
                     <GoogleMap venueLat={this.state.venueb.latitude} venueLong={this.state.venueb.longitude} />
                   </div>
                 </div>
               </div>
               <div className="right-column">
                 <div className="business-details">
                   <h1>{this.state.venueb.name}</h1>
                   <div className="cost-website">
                     <p>{this.state.venueb.cost}</p>
                     <a href={this.state.venueb.website} target="_blank" rel="noopener">
                       Website
                     </a>
                   </div>
                   <p>Details: {this.state.venueb.description}</p>
                   <p>Address: {this.state.venueb.address}</p>
                 </div>
               </div>
             </div>
        )
      }
    }

}

export default VenueShow;

