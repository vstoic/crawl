import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const fetchAllVenues = () => {
  return axios.get("/api/venues/");
};

export const fetchVenue = (id) => {
  return axios.get(`/api/venues/${id}`);
};
export const deleteVenue = (id) => {
  return axios.delete(`/api/venues/${id}`);
};
export const updateVenue = (venue) => {
    return axios.patch(`/api/venues/${venue.id}`, venue);
}

export const createVenue = async (venueData) => {

  let create_venue = await axios.post("/api/venues", venueData);
  console.log("create_venue",create_venue)
  return create_venue
};
export const getVenuesByUser = async(userId) => {
  let getvenue = await axios.get(`/api/venues/users/${userId}`);
  console.log("Data=========>",getvenue)
  return getvenue;
};

