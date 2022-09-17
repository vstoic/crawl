import axios from "axios";

export const fetchAllVenues = async () => {
  let venue = await axios.get("/api/venues/");
  // console.log("VenueData======>",venue)
  return venue
};

export const fetchVenue = async(id) => {

  let venueById = await axios.get(`/api/venues/${id}`);
  return venueById

};

export const deleteVenue = async(id) => {
  let venueById = await axios.delete(`/api/venues/${id}`);
  return venueById
}
