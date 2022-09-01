import axios from "axios";

// We've been using this method in previos steps
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const createVenue = async (venueData) => {

  let create_venue = await axios.post("/api/venues", venueData);
  console.log("create_venue",create_venue)
  return create_venue
};

export const login = (userData) => {
  return axios.post("/api/users/login", userData);
};
