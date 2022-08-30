import React, { useEffect } from "react";

export default function VenueSingle(props) {
  useEffect(() => {
    props.fetchVenue(props.match.params.id);
  }, []);
  const venueName = props.venueReducer?.singleVenue?.data?.name;
  const venueAddress = props.venueReducer?.singleVenue?.data?.address;
  const venueDescription = props.venueReducer?.singleVenue?.data?.description;
  const venueCost = props.venueReducer?.singleVenue?.data?.cost;
  const venueImageSrc = props.venueReducer?.singleVenue?.data?.image;
  const venueLat = props.venueReducer?.singleVenue?.data?.latitude;
  const venueLong = props.venueReducer?.singleVenue?.data?.longitude;

  console.log("IDPROPS=======>", props.venueReducer?.singleVenue);
  return (
    <div>
      <div>
        <h1>{venueName}</h1>
      </div>
      <div>
        <p>{venueDescription}</p>
      </div>
      <div>
        <em>{venueAddress}</em>
      </div>
      <div>{venueCost}</div>
      <div>
        <img src={venueImageSrc} />
      </div>
      <div>{venueLat}</div>
      <div>{venueLong}</div>
    </div>
  );
}
