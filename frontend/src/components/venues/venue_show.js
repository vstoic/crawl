import React, { useEffect } from "react";
import "../../assets/stylesheets/venue_show.css";


 function VenueShow(props) {
  useEffect(() => {
    props.fetchVenue(props.match.params.id);
  }, []);
  const venueName =
    props.match.params.id == "1234" ? props.createVenueReducer?.singleVenue?.name : props.venueReducer?.singleVenue?.data?.name;
  const venueAddress =
    props.match.params.id == "1234"
      ? props.createVenueReducer?.singleVenue?.address
      : props.venueReducer?.singleVenue?.data?.address;
  const venueDescription =
    props.match.params.id == "1234"
      ? props.createVenueReducer?.singleVenue?.description
      : props.venueReducer?.singleVenue?.data?.description;
  const venueCost = props.match.params.id == "1234"
      ? props.createVenueReducer?.singleVenue?.cost : props.venueReducer?.singleVenue?.data?.cost;
  const venueImageSrc =
    props.match.params.id == "1234"
      ? props.createVenueReducer?.singleVenue?.image
      : props.venueReducer?.singleVenue?.data?.image;
  const venueWebsite =
    props.match.params.id == "1234"
      ? props.createVenueReducer?.singleVenue?.website
      : props.venueReducer?.singleVenue?.data?.website;
  // const venueLat = props.venueReducer?.singleVenue?.data?.latitude;
  // const venueLong = props.venueReducer?.singleVenue?.data?.longitude;
console.log("IDPROPS=======>",typeof props.match.params.id);
  console.log("IDPROPS=======>", props.createVenueReducer);
  return (
    <div className="venue-show-main">
      <div className="left-column">
        <div className="venue-show-image-container"><img src={venueImageSrc} className="venue-show-image" /></div>  
        <div className="venue-show-map-container"><h1 className="venue-show-map">map</h1></div>
      </div>
      <div className="right-column">        
        <div className="business-details"> 
          <h1>{venueName}</h1>
          <div className="cost-website">
            <p>{venueCost}</p>
            <a href={venueWebsite} target="_blank" rel="noopener">Website</a>
          </div>
          <p>Details: {venueDescription}</p>
          <p>Address: {venueAddress}</p>
          {/* <div>{venueLat}</div> */}
          {/* <div>{venueLong}</div> */}
        </div>
        <div className="comments-container">
          <p>comments-container</p>
          </div>
      </div>
    </div>
  );
}

export default VenueShow;