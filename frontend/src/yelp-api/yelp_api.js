import { YKEY } from "./yelpkey";
import queryString from 'query-string';

const API_BASE_URL = "https://api.yelp.com/v3";

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`), {
        headers: {
            Authorization: `Bearer ${YKEY}`,
            origin: 'localhost',
            withCredentials: true 
        }
    }
}