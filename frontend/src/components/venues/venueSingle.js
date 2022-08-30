import React, { useEffect } from "react";

export default function VenueSingle(props) {
  useEffect(() => {
    props.fetchVenue(props.match.params.id);
  }, []);
  const venueName = props.venueReducer?.singleVenue?.data?.name;
  console.log("IDPROPS=======>", props.venueReducer?.singleVenue);
  return <div>{venueName}</div>;
}
