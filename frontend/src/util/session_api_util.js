import axios from "axios";

// We've been using this method in previos steps
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post(
    "https://f646-184-152-223-68.ngrok.io/api/users/register",
    userData
  );
};

export const login = (userData) => {
  return axios.post(
    "https://f646-184-152-223-68.ngrok.io/api/users/login",
    userData
  );
};
